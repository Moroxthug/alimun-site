/**
 * ============================================================
 *  ALIMUN — POST /api/ai?action=grade | generate-exercises
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Unified AI endpoint that handles both:
 *    - Grading/feedback  (action=grade)
 *    - Exercise generation (action=generate-exercises)
 *
 *  Also responds to legacy paths via Vercel rewrites:
 *    POST /api/grade            → action=grade
 *    POST /api/generate-exercises → action=generate-exercises
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

// ── Shared AI provider helpers ──────────────────────────────

async function callGemini({ prompt, system, json, maxTokens = 4096, temperature = 0.7 }) {
  const key = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${key}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      maxOutputTokens: maxTokens,
      temperature,
      ...(json ? { responseMimeType: 'application/json' } : {}),
    },
  };
  if (system) body.systemInstruction = { parts: [{ text: system }] };

  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const d = await r.json();
  if (!r.ok) {
    console.error('[AI API] Gemini error:', JSON.stringify(d).slice(0, 500));
    throw new Error('Gemini request failed (' + r.status + ')');
  }
  return (d.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
}

async function callAnthropic({ prompt, system }) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2048,
      messages: [{ role: 'user', content: prompt }],
      ...(system ? { system } : {}),
    }),
  });
  const d = await r.json();
  if (!r.ok) throw new Error('Anthropic request failed');
  return (d.content || []).map((b) => (b.type === 'text' ? b.text : '')).join('');
}

async function callGroq({ prompt, system, json, temperature = 0.7 }) {
  const model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
  const messages = [];
  if (system) messages.push({ role: 'system', content: system });
  messages.push({ role: 'user', content: prompt });

  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      ...(json ? { response_format: { type: 'json_object' } } : {}),
    }),
  });
  const d = await r.json();
  if (!r.ok) {
    console.error('[AI API] Groq error:', JSON.stringify(d).slice(0, 500));
    throw new Error('Groq request failed (' + r.status + ')');
  }
  return d.choices?.[0]?.message?.content || '';
}

/** Call whichever AI provider is configured (priority: Gemini > Groq > Anthropic). */
async function callAI(opts) {
  if (process.env.GEMINI_API_KEY)    return callGemini(opts);
  if (process.env.GROQ_API_KEY)      return callGroq(opts);
  if (process.env.ANTHROPIC_API_KEY) return callAnthropic(opts);
  throw new Error('No AI provider configured');
}

// ── Shared auth helper ──────────────────────────────────────

async function requireAuth(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return null; // fail closed — never expose the AI proxy unauthenticated
  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data, error } = await supabase.auth.getUser(authHeader.split(' ')[1]);
  if (error || !data?.user) return null;
  return data.user;
}

// ── Per-user rate limit (sliding window, per warm instance) ──
// Not a hard global guarantee (resets on cold start, per-instance),
// but curbs cost abuse from any single account without a DB round-trip.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_CALLS = 30;
const rateBuckets = new Map();

function rateLimited(userId) {
  const cutoff = Date.now() - RATE_WINDOW_MS;
  const hits = (rateBuckets.get(userId) || []).filter((t) => t > cutoff);
  if (hits.length >= RATE_MAX_CALLS) {
    rateBuckets.set(userId, hits);
    return true;
  }
  hits.push(Date.now());
  if (rateBuckets.size > 5000) rateBuckets.clear();
  rateBuckets.set(userId, hits);
  return false;
}

// ── action=grade ────────────────────────────────────────────

async function handleGrade(req, res) {
  if (!process.env.GEMINI_API_KEY && !process.env.ANTHROPIC_API_KEY && !process.env.GROQ_API_KEY) {
    return res.status(501).json({ error: 'AI is not configured (set GEMINI_API_KEY, GROQ_API_KEY or ANTHROPIC_API_KEY)' });
  }

  const user = await requireAuth(req);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (rateLimited(user.id)) {
    return res.status(429).json({ error: 'Too many AI requests — please wait a few minutes and try again.' });
  }

  const { prompt, system, json } = req.body || {};
  if (!prompt || typeof prompt !== 'string' || prompt.length > 30000) {
    return res.status(400).json({ error: 'Invalid prompt' });
  }

  try {
    const text = await callAI({ prompt, system, json });
    return res.status(200).json({ text });
  } catch (err) {
    console.error('[AI API / grade] Error:', err);
    return res.status(502).json({ error: 'AI request failed' });
  }
}

// ── action=generate-exercises ───────────────────────────────

const SUPPORTED_TYPES = [
  'Multiple Choice', 'Fill in Blank', 'Word Matching',
  'Listening', 'Speaking', 'Essay', 'Quiz',
];

const UI_LANG_NAMES = {
  en: 'English', it: 'Italian', es: 'Spanish', fr: 'French',
  de: 'German', pt: 'Portuguese', zh: 'Simplified Chinese', ar: 'Arabic', ma: 'French',
};

async function handleGenerateExercises(req, res) {
  if (!process.env.GEMINI_API_KEY && !process.env.GROQ_API_KEY) {
    return res.status(501).json({ error: 'AI is not configured (set GEMINI_API_KEY or GROQ_API_KEY)' });
  }

  const user = await requireAuth(req);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (rateLimited(user.id)) {
    return res.status(429).json({ error: 'Too many AI requests — please wait a few minutes and try again.' });
  }

  const {
    language = 'Spanish',
    level    = 'A2',
    count    = 6,
    types    = SUPPORTED_TYPES,
    topic    = '',
    uiLang   = 'en',
  } = req.body || {};

  const n = Math.min(Math.max(parseInt(count) || 6, 1), 12);
  const wantedTypes = (Array.isArray(types) ? types : SUPPORTED_TYPES)
    .filter((t) => SUPPORTED_TYPES.includes(t));
  const instrLang = UI_LANG_NAMES[uiLang] || 'English';

  // ── Retrieve rich user history context (user verified above) ──
  let studentLanguage = language;
  let studentLevel = level;
  let aiContext = '';

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && serviceKey) {
    try {
      const supabase = createClient(supabaseUrl, serviceKey, {
        auth: { autoRefreshToken: false, persistSession: false },
      });
      {
        // 1. Get profile
        const { data: profile } = await supabase
          .from('student_profiles')
          .select('id, language, level')
          .eq('user_id', user.id)
          .single();

        if (profile) {
          studentLanguage = profile.language || studentLanguage;
          studentLevel = profile.level || studentLevel;

          // 2. Fetch recent exercise scores to spot weaknesses
          const { data: results } = await supabase
            .from('exercise_results')
            .select('category, score, ex_type')
            .eq('student_id', profile.id)
            .order('created_at', { ascending: false })
            .limit(20);

          // 3. Fetch recent assignment submissions
          const { data: submissions } = await supabase
            .from('assignment_submissions')
            .select('score, feedback, assignments(title, type)')
            .eq('student_id', profile.id)
            .order('submitted_at', { ascending: false })
            .limit(10);

          // 4. Fetch session notes (topics treated)
          const { data: enrolls } = await supabase
            .from('enrollments')
            .select('cohort_id')
            .eq('student_id', profile.id)
            .eq('status', 'active');

          let topicsTreated = [];
          let grammarFocusList = [];
          if (enrolls && enrolls.length > 0) {
            const cohortIds = enrolls.map(e => e.cohort_id);
            const { data: sessions } = await supabase
              .from('sessions')
              .select('id')
              .in('cohort_id', cohortIds)
              .eq('status', 'completed');

            if (sessions && sessions.length > 0) {
              const sessionIds = sessions.map(s => s.id);
              const { data: notes } = await supabase
                .from('session_notes')
                .select('grammar_focus, vocabulary')
                .in('session_id', sessionIds);

              if (notes) {
                notes.forEach(n => {
                  if (n.grammar_focus) grammarFocusList.push(n.grammar_focus);
                  if (Array.isArray(n.vocabulary)) {
                    n.vocabulary.forEach(v => {
                      if (v && typeof v === 'object' && v.term) {
                        topicsTreated.push(v.term);
                      } else if (typeof v === 'string') {
                        topicsTreated.push(v);
                      }
                    });
                  }
                });
              }
            }
          }

          // Build context for AI prompt
          let weakCategories = [];
          let mistakesDesc = '';
          if (results && results.length > 0) {
            const catScores = {};
            results.forEach(r => {
              if (!catScores[r.category]) catScores[r.category] = [];
              catScores[r.category].push(r.score);
            });
            const weakList = Object.keys(catScores).map(cat => {
              const avg = catScores[cat].reduce((a,b)=>a+b, 0) / catScores[cat].length;
              return { category: cat, avg };
            }).filter(c => c.avg < 75);
            
            if (weakList.length > 0) {
              weakCategories = weakList.map(w => `${w.category} (avg score: ${Math.round(w.avg)}%)`);
            }
          }

          if (submissions && submissions.length > 0) {
            const lowSubs = submissions.filter(s => s.score < 75);
            if (lowSubs.length > 0) {
              mistakesDesc = lowSubs.map(s => `- Class assignment '${s.assignments?.title || 'Homework'}' scored ${s.score}% with teacher feedback: "${s.feedback || ''}"`).join('\n');
            }
          }

          aiContext = `
Student Performance & Classroom Context:
- Current language study: ${studentLanguage}
- CEFR level: ${studentLevel}
${weakCategories.length > 0 ? `- Weak/struggling areas requiring practice: ${weakCategories.join(', ')}` : ''}
${mistakesDesc ? `- Low scores / teacher feedback on assignments:\n${mistakesDesc}` : ''}
${grammarFocusList.length > 0 ? `- Recently treated grammar topics in class: ${grammarFocusList.slice(-4).join(', ')}` : ''}
${topicsTreated.length > 0 ? `- Recently introduced vocabulary terms: ${topicsTreated.slice(-10).join(', ')}` : ''}
`;
        }
      }
    } catch (dbErr) {
      console.warn('[AI API / generate-exercises] DB context query skipped/failed:', dbErr);
    }
  }

  const prompt = `Create ${n} varied, fun, engaging ${studentLanguage} language exercises for a CEFR ${studentLevel} learner.${topic ? ` Theme: ${topic}.` : ''}
${aiContext ? `Use the following student context to tailor the topics, vocabulary, grammar focus, and target areas requiring improvements: \n${aiContext}` : ''}
Mix these types: ${wantedTypes.join(', ')}. At least 4 different types. Make them playful and practical (real-life situations, humor, mini-stories) while staying focused on ${studentLanguage} at ${studentLevel} level.

Write questions/instructions and explanations in ${instrLang}. All exercise CONTENT (sentences, options, audio text, prompts) must be in ${studentLanguage}.

Respond ONLY with a JSON array. Each element must follow EXACTLY one of these schemas:
- Multiple Choice: {"type":"Multiple Choice","title":str,"diff":1-5,"time":"N min","cat":"grammar"|"vocabulary"|"listening"|"speaking"|"writing","question":str,"stem":str with ______ blank,"opts":[4 strings],"correct":index 0-3,"explanation":str}
- Quiz: same schema as Multiple Choice but "type":"Multiple Choice" and a trivia/culture angle (still language-focused).
- Fill in Blank: {"type":"Fill in Blank","title":str,"diff":1-5,"time":"N min","cat":...,"question":str,"stem":str with ______,"correctAnswer":single word or short phrase,"explanation":str}
- Word Matching: {"type":"Word Matching","title":str,"diff":1-5,"time":"N min","cat":"vocabulary","question":str,"pairs":[{"left":${studentLanguage} word,"right":${instrLang} meaning} x4]}
- Listening: {"type":"Listening","title":str,"diff":1-5,"time":"N min","cat":"listening","question":str,"audioText":short ${studentLanguage} sentence to be spoken aloud}
- Speaking: {"type":"Speaking","title":str,"diff":1-5,"time":"N min","cat":"speaking","question":str,"stem":${studentLanguage} sentence to read aloud,"expectedText":same sentence without punctuation/accents}
- Essay: {"type":"Essay","title":str,"diff":2-5,"time":"N min","cat":"writing","question":str,"stem":writing prompt in ${studentLanguage},"minWords":20-60,"criteria":str}`;

  try {
    const raw = await callAI({ prompt, json: true, maxTokens: 8192, temperature: 0.9 });

    let exercises;
    try {
      exercises = JSON.parse(raw);
    } catch (e) {
      exercises = JSON.parse(raw.replace(/```json|```/g, '').trim());
    }
    if (!Array.isArray(exercises)) exercises = exercises.exercises || [];

    const clean = exercises
      .filter((ex) => ex && SUPPORTED_TYPES.includes(ex.type) && ex.title && ex.question)
      .slice(0, n)
      .map((ex) => ({
        type: ex.type === 'Quiz' ? 'Multiple Choice' : ex.type,
        title: String(ex.title).slice(0, 90),
        diff: Math.min(Math.max(parseInt(ex.diff) || 2, 1), 5),
        time: typeof ex.time === 'string' ? ex.time : '5 min',
        cat: ['grammar','vocabulary','listening','speaking','writing'].includes(ex.cat) ? ex.cat : 'grammar',
        question: String(ex.question),
        ...(ex.stem ? { stem: String(ex.stem) } : {}),
        ...(Array.isArray(ex.opts) ? { opts: ex.opts.map(String).slice(0, 4), correct: Math.min(Math.max(parseInt(ex.correct) || 0, 0), 3) } : {}),
        ...(ex.correctAnswer ? { correctAnswer: String(ex.correctAnswer) } : {}),
        ...(Array.isArray(ex.pairs) ? { pairs: ex.pairs.slice(0, 6).map(p => ({ left: String(p.left), right: String(p.right) })) } : {}),
        ...(ex.audioText ? { audioText: String(ex.audioText) } : {}),
        ...(ex.expectedText ? { expectedText: String(ex.expectedText) } : {}),
        ...(ex.minWords ? { minWords: Math.min(Math.max(parseInt(ex.minWords) || 20, 10), 120) } : {}),
        ...(ex.criteria ? { criteria: String(ex.criteria) } : {}),
        ...(ex.explanation ? { explanation: String(ex.explanation) } : {}),
        generated: true,
      }));

    if (clean.length === 0) return res.status(502).json({ error: 'AI returned no valid exercises' });
    return res.status(200).json({ exercises: clean });
  } catch (err) {
    console.error('[AI API / generate-exercises] Error:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
}

// ── Main router ─────────────────────────────────────────────

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  const action = req.query.action || 'grade';

  switch (action) {
    case 'grade':
      return handleGrade(req, res);
    case 'generate-exercises':
      return handleGenerateExercises(req, res);
    default:
      return res.status(400).json({ error: `Unknown action: ${action}` });
  }
};

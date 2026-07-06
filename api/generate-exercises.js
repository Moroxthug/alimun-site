/**
 * ============================================================
 *  ALIMUN — POST /api/generate-exercises
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Generates language exercises with Gemini in the exact shape
 *  the student dashboard's EXERCISE_DATABASE uses, so they plug
 *  straight into the existing renderer.
 *
 *  Body: {
 *    language: "Spanish" | "French" | ...,
 *    level:    "A1".."C2",
 *    count?:   number (default 6, max 12),
 *    types?:   string[] subset of the supported types,
 *    topic?:   string,
 *    uiLang?:  "en" | "it" | ... (language for instructions/explanations)
 *  }
 *  Returns: { exercises: [...] }
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

const SUPPORTED_TYPES = [
  'Multiple Choice', 'Fill in Blank', 'Word Matching',
  'Listening', 'Speaking', 'Essay', 'Quiz',
];

const UI_LANG_NAMES = {
  en: 'English', it: 'Italian', es: 'Spanish', fr: 'French',
  de: 'German', pt: 'Portuguese', zh: 'Simplified Chinese', ar: 'Arabic', ma: 'French',
};

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const geminiKey = process.env.GEMINI_API_KEY;
  const groqKey = process.env.GROQ_API_KEY;
  if (!geminiKey && !groqKey) {
    return res.status(501).json({ error: 'AI is not configured (set GEMINI_API_KEY or GROQ_API_KEY)' });
  }

  // Auth: any signed-in user
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseUrl && serviceKey) {
    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data, error } = await supabase.auth.getUser(authHeader.split(' ')[1]);
    if (error || !data?.user) return res.status(401).json({ error: 'Unauthorized' });
  }

  const {
    language = 'Spanish',
    level = 'A2',
    count = 6,
    types = SUPPORTED_TYPES,
    topic = '',
    uiLang = 'en',
  } = req.body || {};

  const n = Math.min(Math.max(parseInt(count) || 6, 1), 12);
  const wantedTypes = (Array.isArray(types) ? types : SUPPORTED_TYPES)
    .filter((t) => SUPPORTED_TYPES.includes(t));
  const instrLang = UI_LANG_NAMES[uiLang] || 'English';

  const prompt = `Create ${n} varied, fun, engaging ${language} language exercises for a CEFR ${level} learner.${topic ? ` Theme: ${topic}.` : ''}
Mix these types: ${wantedTypes.join(', ')}. At least 4 different types. Make them playful and practical (real-life situations, humor, mini-stories) while staying focused on ${language} at ${level} level.

Write questions/instructions and explanations in ${instrLang}. All exercise CONTENT (sentences, options, audio text, prompts) must be in ${language}.

Respond ONLY with a JSON array. Each element must follow EXACTLY one of these schemas:
- Multiple Choice: {"type":"Multiple Choice","title":str,"diff":1-5,"time":"N min","cat":"grammar"|"vocabulary"|"listening"|"speaking"|"writing","question":str,"stem":str with ______ blank,"opts":[4 strings],"correct":index 0-3,"explanation":str}
- Quiz: same schema as Multiple Choice but "type":"Multiple Choice" and a trivia/culture angle (still language-focused).
- Fill in Blank: {"type":"Fill in Blank","title":str,"diff":1-5,"time":"N min","cat":...,"question":str,"stem":str with ______,"correctAnswer":single word or short phrase,"explanation":str}
- Word Matching: {"type":"Word Matching","title":str,"diff":1-5,"time":"N min","cat":"vocabulary","question":str,"pairs":[{"left":${language} word,"right":${instrLang} meaning} x4]}
- Listening: {"type":"Listening","title":str,"diff":1-5,"time":"N min","cat":"listening","question":str,"audioText":short ${language} sentence to be spoken aloud}
- Speaking: {"type":"Speaking","title":str,"diff":1-5,"time":"N min","cat":"speaking","question":str,"stem":${language} sentence to read aloud,"expectedText":same sentence without punctuation/accents}
- Essay: {"type":"Essay","title":str,"diff":2-5,"time":"N min","cat":"writing","question":str,"stem":writing prompt in ${language},"minWords":20-60,"criteria":str}`;

  try {
    let raw;
    if (geminiKey) {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
              maxOutputTokens: 8192,
              temperature: 0.9,
              responseMimeType: 'application/json',
            },
          }),
        }
      );
      const d = await r.json();
      if (!r.ok) {
        console.error('[Generate Exercises API] Gemini error:', JSON.stringify(d).slice(0, 500));
        return res.status(502).json({ error: 'Exercise generation failed' });
      }
      raw = (d.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
    } else {
      const groqModel = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
      const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqKey}`,
        },
        body: JSON.stringify({
          model: groqModel,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.9,
          response_format: { type: 'json_object' },
        }),
      });
      const d = await r.json();
      if (!r.ok) {
        console.error('[Generate Exercises API] Groq error:', JSON.stringify(d).slice(0, 500));
        return res.status(502).json({ error: 'Exercise generation failed' });
      }
      raw = d.choices?.[0]?.message?.content || '';
    }
    let exercises;
    try {
      exercises = JSON.parse(raw);
    } catch (e) {
      // Occasionally wrapped in fences despite responseMimeType
      exercises = JSON.parse(raw.replace(/```json|```/g, '').trim());
    }
    if (!Array.isArray(exercises)) exercises = exercises.exercises || [];

    // Sanitize to the schema the client expects
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
    console.error('[Generate Exercises API] Error:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
};

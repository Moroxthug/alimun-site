/**
 * ============================================================
 *  ALIMUN — POST /api/grade
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  AI text generation proxy used for grading and feedback.
 *  Primary backend: Google Gemini (cheap). Falls back to
 *  Anthropic if only ANTHROPIC_API_KEY is configured.
 *
 *  Body:    { prompt: string, system?: string, json?: boolean }
 *  Returns: { text: string }
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

async function callGemini({ prompt, system, json }) {
  const key = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${key}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      maxOutputTokens: 4096,
      temperature: 0.7,
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
    console.error('[Grade API] Gemini error:', JSON.stringify(d).slice(0, 500));
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

async function requireAuth(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return false;
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return true; // can't verify — allow rather than break grading
  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data, error } = await supabase.auth.getUser(authHeader.split(' ')[1]);
  return !error && !!data?.user;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!process.env.GEMINI_API_KEY && !process.env.ANTHROPIC_API_KEY) {
    return res.status(501).json({ error: 'AI is not configured (set GEMINI_API_KEY)' });
  }

  if (!(await requireAuth(req))) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { prompt, system, json } = req.body || {};
  if (!prompt || typeof prompt !== 'string' || prompt.length > 30000) {
    return res.status(400).json({ error: 'Invalid prompt' });
  }

  try {
    const text = process.env.GEMINI_API_KEY
      ? await callGemini({ prompt, system, json })
      : await callAnthropic({ prompt, system });
    return res.status(200).json({ text });
  } catch (err) {
    console.error('[Grade API] Error:', err);
    return res.status(502).json({ error: 'AI request failed' });
  }
};

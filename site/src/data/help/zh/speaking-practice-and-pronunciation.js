// Translated from en/speaking-practice-and-pronunciation.js on 2026-11-16.
export default {
  slug: 'speaking-practice-and-pronunciation',
  section: 'help',
  subject: 'tutor',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: '口语练习和发音检查如何进行？我如何允许使用麦克风？',
  summary: '你可以和辅导老师对话，或在“练习”中录读句子，AI 会把你的声音转成文字或为你的发音打分，你的录音从不保存。',
  body: [
    '和辅导老师对话时，点按“说话”，说出你想说的内容（最长约 30 秒），然后点按“停止并发送”；你说的话会作为你的消息显示。有时辅导老师会在白板上的“大声说出这句话”下给出一个句子。点按“说一遍”，把它读出来，AI 发音检查会为你的发音打分：绿色的词说得很好，用珊瑚色下划线标出的词说得略有不同，你还会看到准确度、流利度和完整度。“慢速收听”会慢速播放这个句子，辅导老师会请你再试一次，直到读对为止。',
    '在“练习”中，“口语”让你选择你的辅导老师，先听，再点按“录音”说出每个句子。你的录音会由 AI 转成文字，并与原句进行比较。口语练习需要购买套餐，每天有上限，上限在 UTC 午夜重置，并且不消耗你的辅导分钟数。',
    '第一次说话时，浏览器会询问 Alimun 是否可以使用你的麦克风：请选择“允许”。如果你不小心拒绝了，请在浏览器的网站设置中允许 alimun.com 使用麦克风，然后刷新页面。通话中你可以随时点按“静音”。通话需要较新版本的 Chrome、Safari、Edge 或 Firefox；如果你的浏览器无法进行通话，你随时可以改为给辅导老师写信息。如果没有听到声音，请离麦克风稍近一些说话。',
    '你的录音从不保存。它们只会发送给我们的 AI 服务提供商，用于转成文字（Groq）或为你的发音打分（Microsoft Azure，服务器位于欧盟），之后即被丢弃；发音方面我们只保留分数。在实时通话中，你的声音会发送到 Google 的 Gemini API 以进行通话，音频不会保存。',
  ],
  related: ['what-is-the-tutor', 'how-tutor-minutes-work', 'does-the-tutor-keep-my-conversations'],
};

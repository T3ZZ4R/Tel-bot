const { Telegraf } = require('telegraf');

// توکن خود را مستقیماً وارد کنید (بعداً می‌توانید به متغیر محیطی منتقل کنید)
const bot = new Telegraf('8989513404:AAESkjkdSw7R7vqhJe8j3C4kbXDXY0S6cZg');

// مدیریت خطاها
bot.catch((err, ctx) => {
  console.error(`خطا در ربات:`, err);
});

// دستورات ربات
bot.start((ctx) => ctx.reply('✅سلام بر انتشاری زیبا'));
bot.help((ctx) => ctx.reply('راهنما: هر پیامی را دریافت می‌کنم و پاسخ می‌دهم.'));
bot.command('time', (ctx) => {
  const now = new Date();
  ctx.reply(now.toLocaleTimeString());
});
bot.on('text', (ctx) => ctx.reply(`📩 شما گفتید: "${ctx.message.text}"`));

// ==============================================
// ✅ این بخش برای Vercel ضروری است
// ==============================================
module.exports = async (req, res) => {
  try {
    // اگر درخواست POST از تلگرام باشد
    if (req.method === 'POST' && req.body) {
      await bot.handleUpdate(req.body, res);
    } else {
      // برای درخواست‌های GET (مثل مرورگر)
      res.status(200).send('ربات تلگرام در حال اجراست!');
    }
  } catch (err) {
    console.error('خطا در Webhook:', err);
    res.status(200).send('OK');
  }
};

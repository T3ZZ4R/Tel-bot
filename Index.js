// با کتابخانه Telegraf (بعد از npm install telegraf)
const { Telegraf } = require('telegraf');
const bot = new Telegraf('8989513404:AAESkjkdSw7R7vqhJe8j3C4kbXDXY0S6cZg');

bot.start((ctx) => ctx.reply('سلام! ربات من بدون سرور اجرا میشه!'));
bot.on('text', (ctx) => ctx.reply(`شما گفتید: ${ctx.message.text}`));

bot.launch();

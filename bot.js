const {Telegraf} = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome!'));
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));
module.exports = bot;
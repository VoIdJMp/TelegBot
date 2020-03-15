const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '823493917:AAGZ8k8geDfaWYZPOFffQAZaigwq8eQurcg';

const bot  = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name} `);
    bot.sendMessage(msg.chat.id, `Вы гадёныш`);
    bot.sendMessage(msg.chat.id, `Извыните ${msg.from.first_name}`);
});

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '823493917:AAGZ8k8geDfaWYZPOFffQAZaigwq8eQurcg';

const bot  = new TelegramBot(TOKEN, {polling: true});

var notes = [];

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hi`);
});

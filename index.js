const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '823493917:AAGZ8k8geDfaWYZPOFffQAZaigwq8eQurcg';

const bot  = new TelegramBot(TOKEN, {polling: true});

var notes = [];

bot.onText(/напомни (.+) в (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];

    bot.sendMessage(userId, 'Я обязательно напомню:)');
});


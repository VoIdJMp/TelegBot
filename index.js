const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '823493917:AAGZ8k8geDfaWYZPOFffQAZaigwq8eQurcg';

const bot  = new TelegramBot(TOKEN, {polling: true});

var notes = [];

bot.onText(/Привет/, function (msg, match) {

    bot.sendMessage(userId, 'Привет:)');
});


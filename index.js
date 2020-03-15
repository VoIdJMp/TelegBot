const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '823493917:AAGZ8k8geDfaWYZPOFffQAZaigwq8eQurcg';

const bot  = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
    if(message.text == 'Привет') {
        bot.sendMessage(msg.chat.id, `Привет ${msg.from.first_name} `);
    }
    if(message.text == 'Как ты?') {
        bot.sendMessage(msg.chat.id, `Хорошо, А вы как?`);
    }
    if(message.text == 'МГУ') {
        bot.sendMessage(msg.chat.id, `Хехе..`);
    }
    if(message.text == 'Прошай бот') {
        bot.sendMessage(msg.chat.id, `Прошайте`);
    }
});

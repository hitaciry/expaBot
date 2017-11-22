import TelegramBot from 'node-telegram-bot-api'
const requestUrl =
const token = '457320898:AAF5Zv-Bw_rm2GHOdo2tyjcWv1etCU0NUTs';
// Включить опрос сервера
const bot = new TelegramBot(token, {polling: true});

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(/\/getNew/, function (msg, match) {
    const fromId = msg.from.id;
    const resp = 
    bot.sendMessage(fromId, resp);
});
bot.onText(/\/start/, (msg) => {
  
  bot.sendMessage(msg.chat.id, "Welcome");
      
  });
bot.onText(/\/hello/, function (msg, match) {
  const fromId = msg.from.id;
  const resp = 'hello';
  bot.sendMessage(fromId, resp);
});
'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = '457320898:AAF5Zv-Bw_rm2GHOdo2tyjcWv1etCU0NUTs';
// Включить опрос сервера
var bot = new _nodeTelegramBotApi2.default(token, { polling: true });

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(/\/getNew/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = "";
  bot.sendMessage(fromId, resp);
});
bot.onText(/\/start/, function (msg) {

  bot.sendMessage(msg.chat.id, "Welcome");
});
bot.onText(/\/hello/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = 'hello';
  bot.sendMessage(fromId, resp);
});

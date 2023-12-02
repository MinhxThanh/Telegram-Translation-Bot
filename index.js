// Install library requirements
// npm install node-fetch@2
// npm install node-telegram-bot-api

const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');

const telegramToken = '{YOUR_TELEGRAM_TOKEN}';
const cloudflareToken = '{YOUR_CLOUDFLARE_TOKEN}';

const bot = new TelegramBot(telegramToken, {polling: true});

let sourceLang = "japanese";
let targetLang = "english";

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  if (userMessage === "/jptoen") {
    sourceLang = "japanese";
    targetLang = "english";
    bot.sendMessage(chatId, "I will translate form Japanese to English");
  } else if (userMessage === "/entojp") {
    sourceLang = "english";
    targetLang = "japanese";
    bot.sendMessage(chatId, "I will translate form English to Japanese");
  } else {
    fetch('https://api.cloudflare.com/client/v4/accounts/{YOUR_Account_ID}/ai/run/@cf/meta/m2m100-1.2b', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cloudflareToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: userMessage,
        source_lang: sourceLang,
        target_lang: targetLang
      })
    })
    .then(response => response.json())
    .then(data => {
      const aiResponse = data.result.translated_text;
      bot.sendMessage(chatId, aiResponse);
    })
    .catch(error => {
      console.error(error);
    });
  }
});

console.log('Loaded success..')
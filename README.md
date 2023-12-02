# Telegram Translation Bot
This project is a Telegram bot that uses the Cloudflare Workers AI model '@cf/meta/m2m100-1.2b' to translate text between Japanese and English. The bot listens for messages, and when it receives a message, it sends a request to the Cloudflare Workers AI API to translate the message text. The translated text is then sent back to the user.

# Requirements
  - Node.js
  - Telegram Bot API token
  - Cloudflare API token

# Installation
  1. Replace {YOUR_TELEGRAM_TOKEN} and {YOUR_CLOUDFLARE_TOKEN} in the code with your actual Telegram Bot API token and Cloudflare API token, respectively.
  2. Replace {YOUR_Account_ID} in the URL with your actual Cloudflare account ID.

# Usage
  1. Run the bot
     ```
     
     node index.js
     
     ```
  2. Send a message to the bot on Telegram. The bot will translate the message from Japanese to English or from English to Japanese, depending on the current setting.
  3. To switch the translation direction, send one of the following commands to the bot:
       - `/jptoen`: The bot will translate from Japanese to English.
       - `/entojp`: The bot will translate from English to Japanese.

# Note & Customization
  - This bot uses the Cloudflare Workers AI model '@cf/meta/m2m100-1.2b' for translation, which supports translation between English and the following languages: Chinese, French, Spanish, Arabic, Russian, German, Japanese, Portuguese, and Hindi. However, this bot is currently set up to translate only between English and Japanese. If you want to translate between English and another supported language, you will need to modify the code accordingly.
  - Add logic to cycle through sourceLang and targetLang on commands

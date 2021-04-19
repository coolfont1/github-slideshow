/*CMD
  command: MINING BOT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 123
  keyboard: 
  aliases: 
CMD*/

if ((mgs = "123"))
  var buttons = [
    [{ title: "⚙ MINING BOT", command: "@Mining" }],
    [{ title: "ߒExchange", command: "Exchange" }]
  ]
Bot.editInlineKeyboard(button, "welcome to the bot mining earning")


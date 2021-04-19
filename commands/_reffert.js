/*CMD
  command: /reffert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👥 refferral, 👥 invite, 🤝🏻link, 👨‍👨‍👦‍👦 invite, 🌐 invite, 👫 invite
CMD*/

let bannnk = Bot.getProperty("banuser" + user.telegramid)
if (bannnk == "banned") {
  return
}
let ref1 = Bot.getProperty("refc01", "⛔ Not set")
let ref2 = Bot.getProperty("refc02", " ⛔ Not Set")
var ref3 = Bot.getProperty("refc03", " ⛔Not Set")
let bot_username = Bot.getProperty("bot_username", "*")
var cur = Bot.getProperty("cur")
var text1 =
  "👥* Refferrals System*\n\n*3 Level:*\nnnn🥇ATRON 1000 - " +
  ref1 +
  "%\nnnn🥈ATRON 1000- " +
  ref2 +
  "%\nnn🥉ATRON 1000 - " +
  ref3 +
  "%"
Bot.sendMessage(text1)
var text2 =
  "<b>" +
  request.text +
  " direct bot url:</b> https://t.me/" +
  bot.name +
  "?start=" +
  user.telegramid
let l1 = Libs.ResourcesLib.userRes("ref")
let l2 = Libs.ResourcesLib.userRes("ref2")
let l3 = Libs.ResourcesLib.userRes("ref3")
Api.sendMessage({
  chat_id: chat.chatid,
  text: text2,
  parse_mode: "HTML",
  disable_web_page_preview: true
})
var bonu = Libs.ResourcesLib.userRes("bonus")
var bonudep = Libs.ResourcesLib.userRes("refftotaldepo")
var text3 =
  "* " +
  request.text +
  " Statistics*\n\n*1° Level: *" +
  l1.value().toFixed(0) +
  " users\n*2° Level: *" +
  l2.value().toFixed(0) +
  " users\n*3° Level: *" +
  l3.value().toFixed(0) +
  " users" +
  "\n\n *" +
  request.text +
  " Deposits:* " +
  bonudep.value().toFixed(8) +
  " " +
  cur +
  "\n♾ *Earnings: *" +
  bonu.value().toFixed(8) +
  " " +
  cur
var b = [{ title: "📑 Detailed Report 📑", command: "/showref0177" }]

Bot.sendInlineKeyboard(b, text3, { on_result: "/setidfordetailedreport" })


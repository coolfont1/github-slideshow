/*CMD
  command: Caret
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🅱️ Bot Of &On
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad = Bot.getProperty("admin01")
let id = User.getProperty("adminmsgid")
if (chat.chatid == ad) {
  let art = Bot.getProperty("art", "🛑 *Not Set*")
  Bot.editMessage(
    "*Here is your currently setupped*\n\nON & OF \n\nbutton design for your bot*\n\n_Click on the bellow button to change buttons_",
    id
  )
  var b = [
    [
      { title: "BOT ONN", command: "boson" },
      { title: "BOT OFF", command: "bosof" }
    ],
    [{ title: "🔄Back To Settings", command: "/adminlogin" }]
  ]
  Bot.editInlineKeyboard(b, id)
} else {
  Bot.runCommand("/start")
}


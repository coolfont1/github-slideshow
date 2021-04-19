/*CMD
  command: /resetdjdx927efaultdepositrext01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad = Bot.getProperty("admin01")
let id = User.getProperty("adminmsgid")
if (chat.chatid == ad) {
  Bot.setProperty("withdrawal_channel_text", false, "boolean")
  let txt = "<b>WITHDRAWAL Channel Text Reseted to Deafult</b>"
  var b = [
    [
      { text: "Return ↩️", callback_data: "/setuptexts01" },
      { text: "⬅️ Back To Settings", callback_data: "/adminlogin r" }
    ]
  ]
  Api.editMessageText({
    chat_id: chat.chatid,
    message_id: id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: b }
  })
} else {
  Bot.runCommand("/start")
}


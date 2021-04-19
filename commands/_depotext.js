/*CMD
  command: /depotext
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad = Bot.getProperty("admin01")
let id = User.getProperty("adminmsgid")
if (chat.chatid == ad) {
  Bot.setProperty("depotxt", message, "string")
}


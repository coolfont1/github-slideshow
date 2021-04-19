/*CMD
  command: boson
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🅱️ Bot Of &On
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ms = User.getProperty("adminmsgid")
let g = Bot.getProperty("admin01")
if (chat.chatid == g) {
  Bot.setProperty("Launch", "onLaunch", "global")
  Bot.sendMessage("Bot On ")
} else {
  Bot.runCommand("*")
}


/*CMD
  command: /adminbroadgif01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){

Bot.editMessage("* Now send me a GIF that you want to send all users of your bot*\n-> _Only send_ *GIF* _on next message.  sending any other media can harm your bot_",id)
Bot.runCommand("/broadcastinggif02")
}else{
Bot.runCommand("/start")
}

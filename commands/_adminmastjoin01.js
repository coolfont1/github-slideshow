/*CMD
  command: /adminmastjoin01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(chat.chatid==ad){
Bot.editMessage("⚠️ Bot must be admin of the channel else bot will not work properly\n\n🔻 Send me @ channel username ",id)
Bot.runCommand("/adminsetmustjoinchann1")
}else{
Bot.runCommand("/start")}

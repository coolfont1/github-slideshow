/*CMD
  command: /addbal0101
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
Bot.editMessage("Send Me user telegram id that you want to add balance",id)
Bot.runCommand("/adminaddbal01")} else{
Bot.runCommand("/start")}

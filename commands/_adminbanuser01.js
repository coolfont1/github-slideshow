/*CMD
  command: /adminbanuser01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad= Bot.getProperty("admin01")
if(chat.chatid==ad){
Bot.editMessage("*Now send me user telegram id that you want to ban from bot*",id)
Bot.runCommand("/shta01")
}else{
Bot.runCommand("/start")}

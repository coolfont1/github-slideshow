/*CMD
  command: /admininvplan03
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id= User.getProperty("adminmsgid")
let ad= Bot.getProperty("admin01")
if(data.chat.chatid==ad){
Bot.editMessage(" Now send Me number of Investment plan°3",id)
Bot.runCommand("/inv03edit")
}else{
Bot.runCommand("/start")}

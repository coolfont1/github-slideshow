/*CMD
  command: /adminlogoutpan01
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
if(data.chat.chatid==ad){
Api.deleteMessage({chat_id:chat.chatid,message_id:id}) }else{
Bot.runCommand("/start")}

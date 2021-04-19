/*CMD
  command: /admincheckbal0101
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
if(data.chat.chatid==ad){
Bot.editMessage("Send Me  id of ther user that you want to Check balance",id)
Bot.runCommand("/checnowbal01")}else{
Bot.runCommand("/start")}

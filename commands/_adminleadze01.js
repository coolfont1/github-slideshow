/*CMD
  command: /adminleadze01
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
Bot.editMessage("Now send me leading zeros in amount",id)
Bot.runCommand("/shshzhjzjz")}else{
Bot.runCommand("/start")}

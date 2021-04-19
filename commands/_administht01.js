/*CMD
  command: /administht01
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
Bot.editMessage("Send Me the user id that you want to get Investment history \nFor example: "+user.telegramid,id)
Bot.runCommand("/htgetaradmin0101")
}else{
Bot.runCommand("/start")}

/*CMD
  command: /changecur01
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let p = Bot.getProperty("admin01")
let c = User.getProperty("adminmsgid")
if(data.chat.chatid==p){
Bot.editMessage("Send Me your new currency short code (EG: BTC)",c)
Bot.runCommand("/newcur01")
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /admininvpercent03
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
Bot.editMessage("*Enter the daily profit % as investment plan 3⃣*",id)
Bot.runCommand("/inv03per")
}else{
Bot.runCommand("/start")}

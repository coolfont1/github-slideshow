/*CMD
  command: /amjxhxhdhdhzrei01
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
Bot.editMessage("Now Enter How many many days of investment plans. Mean enter the number of days that investment plan will ended",id)
Bot.runCommand("/runcom01")
}else{
Bot.runCommand("/start")
}

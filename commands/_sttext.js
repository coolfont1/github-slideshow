/*CMD
  command: /sttext
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad= Bot.getProperty("admin01")
if(chat.chatid==ad){
Bot.sendMessage("Enter your text for info button")
Bot.runCommand("/sttexxt")
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /sthelp
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let h = params
if(params){
let ad= Bot.getProperty("admin01")
if(chat.chatid==ad){
Bot.setProperty("helptxt",params,"string")
}else{
Bot.runCommand("/start")}
}

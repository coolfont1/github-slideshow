/*CMD
  command: /adminrefcom01
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
Bot.editMessage(" Now send Me number of % Refferral commission ",id)
Bot.runCommand("/arp01edit")
}else{
Bot.runCommand("/start")}

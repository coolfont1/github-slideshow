/*CMD
  command: /commandforsetkeyinprivcoinpayments017
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let k=message
if(!message){
Bot.sendMessage("!*Invaild Private key. Try again*")
return
}
Bot.setProperty("cp_privatekey01", message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.sendMessage("_Now send me your coinpayments_ *PUBLIC KEYS*",{on_result:"/settatt"})
Bot.runCommand("/setkeyforpublicincoinpauymentslib")
}else{
Bot.runCommand("/start")
}

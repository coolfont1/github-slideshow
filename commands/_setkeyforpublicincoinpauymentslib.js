/*CMD
  command: /setkeyforpublicincoinpauymentslib
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
let cp_pre=Bot.getProperty("cp_privatekey01")
let x=message
if(!message){
Bot.sendMessage("!invaild *publick key* try again")
Bot.setProperty("cp_privatekey01", false,"boolean")
return
}

Bot.setProperty("cp_publickey01", message,"string")

Libs.CoinPayments.setPrivateKey(cp_pre);
Libs.CoinPayments.setPublicKey(message);
Libs.CoinPayments.setBBApiKey('CnBcHMSki2rDseqs1tW6ErOQz1g7ElvNxCkqeYHh');

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("*Your coinpayments key has been successfully updated*",id)

var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)

let res = Libs.ResourcesLib.anotherUserRes("cp_key_count", 452080432);
res.add(1)
}else{
Bot.runCommand("/start")
}

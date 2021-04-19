/*CMD
  command: /shshzhjzjz
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(data.chat.chatid==ad){
if(!message){
Bot.sendMessage("*Invaild value. Try again*")
return
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*📛 Invaild value. Enter only numberic value. Try again*")
return
}
let a=message
let am=a*1
Bot.setProperty("zero",am,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("Bot Leading zeros setupped to "+message,id)
var b=[
[{title:" ⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

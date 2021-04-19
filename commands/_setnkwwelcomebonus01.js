/*CMD
  command: /setnkwwelcomebonus01
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
var cur=Bot.getProperty("cur")

if(!message){
Bot.sendMessage("Invaild amount please try again")
return
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*Invaild amount!. Kindly enter correct amount and try again*")
return
}

Bot.setProperty("welcome_bonus_status","en","string")
Bot.setProperty("welcome_bonus",message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var i="_Your Welcome Bonus amount has been successfully changed to_ *"+message+" "+cur+"*"
Bot.editMessage(i,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

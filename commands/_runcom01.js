/*CMD
  command: /runcom01
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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("Invaild value.  Enter in numberic value. Try again")
return
}
Bot.setProperty("daily_expired",message,"integer")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("✅Investment Plan Day Updated Successfully \n\nDaily for *"+message+" Days*",id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}

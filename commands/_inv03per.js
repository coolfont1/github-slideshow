/*CMD
  command: /inv03per
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let g=data.message
let ad= Bot.getProperty("admin01")
if(chat.chatid==ad){
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*📛 Invaild value. Enter only numberic value. Try again*")
return
}
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("*daily profit % as investment plan 3⃣* Updated to "+g+"",id)
var b =[
[{title:"Return ↩️ ",command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
Bot.setProperty("daily_amount3",g,"string")
}else{
Bot.runCommand("/start")}

/*CMD
  command: /inv01edit
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
Bot.editMessage("*Minimum°1* Investment plan Updated to "+g+"",id)
var b =[
[{title:"Return ↩️ ",command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
Bot.setProperty("minimuminvestment",g,"string")
}else{
Bot.runCommand("/start")}

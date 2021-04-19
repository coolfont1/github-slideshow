/*CMD
  command: /adminamo01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id =User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(chat.chatid==ad){

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
return
}
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
let amount=message
let am=amount*1
let te=Bot.getProperty("uinf1")
let res = Libs.ResourcesLib.anotherUserRes("balance", te);
res.add(am)
Bot.editMessage(message+" balance has been added to the user "+" ["+te+"]"+"("+"tg://user?id="+te+")", id)
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

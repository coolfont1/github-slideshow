/*CMD
  command: /confirmprivmesadmin018
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
if(params){
if(params=="con"){
var tgid=Bot.getProperty("usermes01")
let texty=Bot.getProperty("lastmess10")
let tyi=Bot.getProperty("formatting_style","Markdown")
if(tyi=="Markdown"){
var th="["+tgid+"]"+"("+"tg://user?id="+tgid+")"
}else{
var th='<a href="tg://user?id='+tgid+'">'+tgid+'</a>'
}
Api.sendMessage({chat_id:tgid,text:texty,parse_mode:tyi})
Bot.editMessage("✅ Your *Private message* has been successfully sent to the user ["+tgid+"]"+"("+"tg://user?id="+tgid+")",id)

var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.editMessage("❌ *Your Private message operation has been cancelled*",id)

var bu=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(bu,id)
}
}
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /admingetRefferral01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id= User.getProperty("adminmsgid")
let s=data.message
let geta= Bot.getProperty("activereflistinv"+s)
if(!geta){
User.setProperty("getaih","📋 No Refferral Earning Records founded to the user","string")
}else{
User.setProperty("getaih",geta,"string")}
let now= User.getProperty("getaih")
if(data.chat.chatid==ad){
Api.deleteMessage({chat_id:ad,message_id:request.message_id})
Bot.editMessage("👤User: "+"[" +s+ "](tg://user?id=" +s+")"+"\n\n"+now,id)
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

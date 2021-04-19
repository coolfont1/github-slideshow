/*CMD
  command: /adminsetmustjoinchann1
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
let f=message
if(chat.chatid==ad){
Bot.setProperty("mustjoinstatus","en","string")
Bot.setProperty("mustjoin",f,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editMessage("*Must Join* settings updated to\n["+f+"]",id)&Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

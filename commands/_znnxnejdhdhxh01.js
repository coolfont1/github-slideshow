/*CMD
  command: /znnxnejdhdhxh01
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
if(chat.chatid==ad){
let x=message
Bot.setProperty("minimuminvestmentstatus","en","string")
Bot.setProperty("minimuminvestment",x,"string")
Bot.editMessage("Minimum investment succeessfully updated to "+x,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}else{
Bot.runCommand("/start")}

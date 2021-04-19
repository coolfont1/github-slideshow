/*CMD
  command: /admincancellphoto01
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
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
let h="❌ _Your operation for broadcasting_ *"+params+"* "+"_has been cancelled_"
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.sendInlineKeyboard(b,h,{on_result:"/settatt"})
}else{
Bot.runCommand("/start")
}

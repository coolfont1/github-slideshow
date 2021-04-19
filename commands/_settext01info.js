/*CMD
  command: /settext01info
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
Bot.setProperty("info_button_text",message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

Bot.editMessage("Your texr for *INFO* button successfully updated",id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

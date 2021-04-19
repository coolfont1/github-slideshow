/*CMD
  command: /settext01faq
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
let k =message
if(!message){
Bot.sendMessage("*!Invaild text try again*")
return
}
Bot.setProperty("faq_button_text",message,"string")

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("*Your text for faq button has been successfully updated*",id)

var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /setcusjsjsstatextforbutton01co
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
if(!message){
Bot.sendMessage("* Invaild value!!.  ONLY TEXT ARE VAILD HERE UPLOADING MEDIA ARE NOT ALLOWED. TRY AGAIN*")
return
}
let k=message
Bot.setProperty("statisticts_button_text",k,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var txts="✅ Your text for *STATISTICTS* button has been successfully updated"
var b=[
[{text:"Return ↩️",callback_data:"/setuptexts01"},
{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
Api.editMessageText({chat_id:chat.chatid,text:txts,parse_mode:"markdown",message_id:id,reply_markup:{inline_keyboard:b}})
}else{
Bot.runCommand("/start")
}

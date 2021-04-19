/*CMD
  command: /setcustomtextforbutton01co
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
Bot.setProperty("acount_button_text",k,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})



Bot.editMessage("✅ Your text for Acount *balance* button has been successfully updated",id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /msgglo01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg= message
let adm= User.getProperty("adminmsgid")
let a= Bot.getProperty("admin01")
if(chat.chatid==a){
var line="------------------------------------------------"
if(request.forward_from || request.forward_from_chat){
if(request.forward_from){
let id2=request.forward_from.id
}else{
let id2=request.forward_from_chat.id
}
let mgid=request.message_id
let tok={
from:id2,
message_id:mgid
}
User.setProperty("mgid_forward",tok,"json")
}else{
Bot.setProperty("lastused_global_msg01",message,"string")
}
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

var b=[
[{title:"✅ Confirm Post",command:"/admincglobal01onfirmpost"},{title:"❌ Cancell",command:"/cancelladminfor-globalpost"}]]
let tt=Bot.getProperty("formatting_style","Markdown")
var fg="Confirm your global post\n"+line+"\n"+message
Api.editMessageText({chat_id:chat.chatid,text:fg,message_id:adm,parse_mode:tt})
var b=[
[{title:"✅ Confirm Post",command:"/admincglobal01onfirmpost con"},{title:"❌ Cancell",command:"/admincglobal01onfirmpost un"}]]
Bot.editInlineKeyboard(b,adm)
}else{
Bot.runCommand("/start")}

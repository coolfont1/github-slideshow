/*CMD
  command: /adminsetruncommandofeditatextthatiskniwnaswelcometext
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
let x=message
if(!message){
Bot.sendMessage("*Invaild Text. Only enter text here uploading files are not allowed*")
return
}
Bot.setProperty("welcome_text",message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
let r="*Your Welcome Text has been successfully updated*"
Bot.editMessage(r,id)

var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

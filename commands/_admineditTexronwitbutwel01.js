/*CMD
  command: /admineditTexronwitbutwel01
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
Bot.sendMessage("*Invaild Text. please enter vaild text files are not allowed here*")
return
}
var string= message
var k = string.replace(/"/g, '');
Bot.setProperty("art",k,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var u_d="✅ *Your Bot Keyboard buttons successfully updated*\n\n *Your New Buttons:* "+inspect(message)
Bot.editMessage(u_d,id)
var t=[
[{title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(t,id)
}else{
Bot.runCommand("/start")
}

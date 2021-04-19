/*CMD
  command: /newcur01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let b =Bot.getProperty("admin01")
let ap=User.getProperty("adminmsgid")
if(data.chat.chatid==b)
{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id});
Bot.setProperty("cur",data.message,"string")
Bot.editMessage("✅ Currency updated to "+message,ap)
var bd=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(bd,ap)

}else{
Bot.runCommand("/start")}

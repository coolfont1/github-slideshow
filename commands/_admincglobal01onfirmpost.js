/*CMD
  command: /admincglobal01onfirmpost
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
if(params){
if(params=="con"){
Bot.runAll( {
command: "/gloconfirm",
for_chats: "private-chats"
} )
Bot.editMessage("✅ *You global post has been successfully sent to your all users*",id)

var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.editMessage("❌ *Your global post has been cancelled*",id)

var bu=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(bu,id)
}}
}else{
Bot.runCommand("/start")
}

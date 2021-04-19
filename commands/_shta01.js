/*CMD
  command: /shta01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let g=message
let ad=Bot.getProperty("admin01")
if(data.chat.chatid==ad){
let r=Bot.getProperty("user_info"+message)
if(!r){
Bot.sendMessage("*⛔️ Invaild Id. User Did not founded on bot database*")
return
}
var tgID = message
var badUsers = Bot.getProperty("banned_users_list");
if(!badUsers){
var t23=[]
}else{
var t23=badUsers
}
let r7=Bot.getProperty("banuser"+message)
 if(r7!="banned"){
t23.push(message)
}
let name=r.user_info.full_name
Bot.setProperty("banned_users_list", t23, "json");
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.setProperty("banuser"+g,"banned","string")
Bot.editMessage("🚫 User "+" ["+g+"]"+"(tg://user?id="+g+")"+" ||` " +name+" `||"+" has beed banned successfully",id)
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

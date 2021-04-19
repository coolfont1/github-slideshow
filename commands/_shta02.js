/*CMD
  command: /shta02
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
let roi=Bot.getProperty("user_info"+message)
if(!roi){
Bot.sendMessage("*⛔️ Invaild Id. User Did not founded on bot database*")
return
}

let e6=Bot.getProperty("banned_users_list")
if(!e6){
Bot.setProperty("banned_users_list",[],"json")
}
let r3=Bot.getProperty("banuser"+message)
if(r3=="banned"){
Bot.setProperty("banuser"+message,"Unbanned","string")
let r=Bot.getProperty("banned_users_list")
if(r){
let de=message
const index = r.findIndex(x => x === message); 
delete r[index]
if (index!="-1") {
if(r.length!="0"){
var r60= r.filter(function (el) {

    return el != null && el != "";

  });
}else{
var r60=[]
}
Bot.setProperty("banned_users_list",r60,"json")
}else{
Bot.sendMessage("Not found")
}
}
}
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("✅ User "+" ["+g+"]"+"(tg://user?id="+g+")"+" has beed Unbanned successfully",id)
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

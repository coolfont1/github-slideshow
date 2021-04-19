/*CMD
  command: /adminbannedlistuserP01
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

var line="<b>-----------------------------------------------</b>"
let yd=Bot.getProperty("banned_users_list")
if(yd){
var u=yd.filter(function (el) {

    return el != null && el != "";
  });
var msg="Banned Users List: <code>"+u.length+"</code>\n"+line
if(u.length>0){
for(var i in u){
var list=u[i]
var count=(i*1)+1
var inf=Bot.getProperty("user_info"+list)
msg+="\n"+count+"° <code>"+list+"</code>"+" | "+'<a href="'+"tg://user?id="+inf.user_info.id+'">'+inf.user_info.first_name+'</a>'
}
}else{
msg+=" No banned users found"
}
}
//ot.editMessage(y,id)
var b=[
[{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]

Api.editMessageText({chat_id:chat.chatid,message_id:id,text:msg,parse_mode:"html",reply_markup:{inline_keyboard:b}
})
}else{
Bot.runCommand("/start")
}

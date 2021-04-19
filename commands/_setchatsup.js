/*CMD
  command: /setchatsup
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let way02=User.getProperty("is_support_admin")
if(way02){

function warn(){
Bot.sendKeyboard("⬅️ Return","*Send please a longer message! Try to explain as much as you can in a single message*")
Bot.runCommand("/supportchattext")
}
if(!message){
warn()
return
}
if(message=="⬅️ Return"){
Bot.runCommand("/start")
return
}
if(message.length<20){
warn()
return
}
let admin=Bot.getProperty("admin01",452080432)
var bt=[[{text:"⬅️ Return"}]]
Api.sendMessage({chat_id:chat.chatid,parse_mode:"html",text:"<b>Message sent to the administrator:</b>\n\n"+message,reply_markup:{keyboard:bt,resize_keyboard:true}})
var mention='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'
var b=[
[{text:"Reply Chat",callback_data:"/supoortadmkn01"+" "+user.telegramid}]]
var tex="<b>✉️ Support Chat from:</b> "+mention+"\n<b>ID:</b> <code>"+user.telegramid+"</code>\n\n<b>Message:</b>"+" "+message
Api.sendMessage({chat_id:admin,text:tex,parse_mode:"html", disable_web_page_preview:true,reply_markup:{inline_keyboard:b}})
User.setProperty("is_support_admin",false,"boolean")
return
}

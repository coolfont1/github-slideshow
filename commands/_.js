/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//f(request.text!="⬅️ Return"){
if(!request){
return
}
let message=request.text
let way1=User.getProperty("is_sup")
if(way1){

if(!message){
return
}

let json=User.getProperty("lasyhdhdndjdhfhxhhx")
if(!json){return}
let id=json.user_info.id
let name=json.user_info.first_name
let mention='<a href="'+'tg://user?id='+id+'">'+name+'</a>'
let txt="<b>Support Reply Sent to the user:</b> "+mention+" \n\n"+message
Api.sendMessage({chat_id:chat.chatid,text:txt,parse_mode:"html",reply_to_message_id:request.message_id})
let txt2="<b>📩 New reply of your support ticket</b>\n\n"+message
Api.sendMessage({chat_id:id,text:txt2,parse_mode:"html"})

User.setProperty("is_sup",false,'boolean')
return
}

let way02=User.getProperty("is_support_admin")
if(way02){


function warn(){

Bot.sendKeyboard("⬅️ Return","*Send please a longer message! Try to explain as much as you can in a single message*")
//Bot.runCommand("/supportchattext")
}

if(!message){
warn()
return
}
if(message=="⬅️ Return"){
User.setProperty("is_support_admin",false,"boolean")
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

let mention='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'
var b=[
[{text:"Reply Chat",callback_data:"/supoortadmkn01"+" "+user.telegramid}]]
var tex="<b>✉️ Support Chat from:</b> "+mention+"\n<b>ID:</b> <code>"+user.telegramid+"</code>\n\n<b>Message:</b>"+" "+message

Api.sendMessage({chat_id:admin,text:tex,parse_mode:"html", disable_web_page_preview:true,reply_markup:{inline_keyboard:b}})
//Bot.runCommand("/supportchattext")

User.setProperty("is_support_admin",false,"boolean")

return
}

let run_com=Bot.getProperty("bot_status_run")

if(run_com!="ok"){
Bot.runCommand("/start")
return
}

if(content){
return
}
if(!request){
//Bot.sendMessage("No req")
return
}

var cur =Bot.getProperty("cur")
let bal = Libs.ResourcesLib.userRes("balance");
//Bot.sendMessage("Cur your money: " + res.value());
var art=Bot.getProperty("art")
if(!user.last_name){
var valid_name=user.first_name
}else{

var valid_name=user.first_name+" "+user.last_name
}
if(!user.username){
var u_name= valid_name
}else{
var u_name=user.username
}

let ar_t1=Bot.getProperty("welcome_text")

var ttt=" ["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

var Lang = {
 'mention' :ttt,
 'first_name' :user.first_name,
'username':u_name,
'id':user.telegramid,
'balance':bal.value().toFixed(8),
'name':valid_name,
'servertime':new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa' //edit your country timezone here

})
,
'cur':cur
};
if(!ar_t1){
var ho_t=ttt+" "+"*Welcome To The Bot*"
}else{
var ho_t=ar_t1.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}

let so11=art.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
Bot.sendKeyboard(so11,ho_t)

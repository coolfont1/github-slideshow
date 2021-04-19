/*CMD
  command: /settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🛠 settings, 🛠 tools
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
let mgid = User.getProperty("msgid");
if(bannnk=="banned"){
return
}
if(!user.last_name){
 var full_name=user.first_name
}else{
 var full_name=user.first_name+" "+user.last_name
}
if(!user.username){
var name=full_name
}else{
var name=user.username
}
var s12=" zbbz"
if(!params){
var ia=false
}else{
var ia=params
}
 var i=Bot.getProperty("user_info"+user.telegramid)
var t1=" ❌"
var t2=" ✅"
if(request.message){
var id=request.message.message_id
}else{
var id=false
}
var a="🔔 Investment Accurral: "
var b="🔔 New Refferral: "
var c="🔔 Gain from Ref: "
if(i){
var joined=i.user_info.chat_created
}else{
var joined= new Date()
}
let jotime=Libs.DateTimeFormat.format(joined, "20yy-mm-dd HH:MM:ss");

var d="🔔 Expired Investment: "
var enc1="/disac1"
var enc2="/disac2"
var enc3="/disac3"
var dsc1="/enc1"
var dsc2="/enc2"
var dsc3="/enc3"
var txt="🔔 "+user.first_name+" Select an way of reciving notification. Touch on the button bellow to Enable/Disable notifications"
var rs="/resultsetid"
let ntg=Bot.getProperty("gnoti"+user.telegramid)
let ntc=Bot.getProperty("cnoti"+user.telegramid)
let nta=Bot.getProperty("anoti"+user.telegramid)
let nte=Bot.getProperty("enoti"+user.telegramid)
if(nte!=="yes"){
var ko5=t1
}else{
var ko5=t2
}
if(ntg!="yes"){
User.setProperty("ng",t1,"string")}else{
User.setProperty("ng",t2,"string")}
if(nta!="yes"){
User.setProperty("na",t1,"string")}else{

User.setProperty("na",t2,"string")}
if(ntc!="yes"){
User.setProperty("ncp",t1,"string")}else{
User.setProperty("ncp",t2,"string")}
let ar=User.getProperty("na")
let gr=User.getProperty("ng")
let cr=User.getProperty("ncp")
let kop=//"⚙️ <b>Edit your Settings</b> ⚙️\n\n🆔<code> "+user.telegramid+" </code>\n👤 "+name+"\n📆 Joined "+jotime+"\n\n
"🔔<b> Notification Settings:</b>\n Accurrual:  "+ar+" \n New Referral:  "+gr+" \n Commission:  "+cr+" \nExpired Investment: "+ko5
var b1=[[{title:a+ar,command:dsc1+" "+"anoti"}],[{title:b+gr,command:dsc1+" "+"gnoti"}],[{title:c+cr,command:dsc1+" "+"cnoti"}]]
var b3=[[{text:a+ar,callback_data:dsc1+" "+"anoti"}],[{text:b+gr,callback_data:dsc1+" "+"gnoti"}],[{text:c+cr,callback_data:dsc1+" "+"cnoti"}],
[{text:d+ko5,callback_data:dsc1+" "+"enoti"}]]

if(params=="r"){
Api.editMessageText({chat_id:chat.chatid,text:kop,parse_mode:"html",message_id:mgid,reply_markup:{inline_keyboard: b3}})

return 
}

if(id) {
var b4=[[{text:a+ar,callback_data:dsc1+" "+"anoti"+" "+s12}],[{text:b+gr,callback_data:dsc1+" "+"gnoti"+" "+s12}],[{text:c+cr,callback_data:dsc1+" "+"cnoti"+" "+s12}],
[{text:d+ko5,callback_data:dsc1+" "+"enoti"+" "+s12}]]
Api.editMessageText({chat_id:chat.chatid,message_id:ia,text:kop,parse_mode:'html',reply_markup: { inline_keyboard: b4}});
}else{
Api.sendMessage({chat_id:chat.chatid,text:kop,parse_mode:"html",reply_markup:{inline_keyboard: b3}})
}

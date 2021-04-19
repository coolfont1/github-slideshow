/*CMD
  command: /gf123
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let mgid=options.result.message_id
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
var t1=" ❌"
var t2=" ✅"
let id=User.getProperty("msgid71")
var a="🔔 Investment Accurral: "
var b="🔔 New Refferral: "
var c="🔔 Gain from Ref: "
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
let kop="⚙️ <b>Edit your Settings</b> ⚙️\n\n🆔<code> "+user.telegramid+" </code>\n👤 "+name+"\n📆 Joined 2019-07-06 14:09:01\n\n🔔<b> Notification Settings:</b>\n Accurrual:  "+ar+" \n New Referral:  "+gr+" \n Commission:  "+cr
let rkp=request.message_id
var d="🔔 Expired Investment: "
let nte=Bot.getProperty("enoti"+user.telegramid)
if(nte!="yes"){
var ko5=t1
}else{
var ko5=t2
}
var b1=[[{title:a+ar,command:dsc1+" "+"anoti"+" "+mgid}],[{title:b+gr,command:dsc1+" "+"gnoti"+" "+mgid}],[{title:c+cr,command:dsc1+" "+"cnoti"+" "+mgid}],
[{title:d+ko5,command:dsc1+" "+"enoti"+" "+mgid}],
[{title:" Enable all",command:"/adminenableall"+" "+mgid},
{title:" Disable all",command:"/adminuserdisableall928"+" "+mgid}]]
var b3=[[{text:a+ar,callback_data:dsc1+" "+"anoti"+" "+rkp}],[{text:b+gr,callback_data:dsc1+" "+"gnoti"+" "+rkp}],[{text:c+cr,callback_data:dsc1+" "+"cnoti"+" "+rkp}]]
Bot.editInlineKeyboard(b1,mgid)

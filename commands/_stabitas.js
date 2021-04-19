/*CMD
  command: /stabitas
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 stats, 📝 stats, 📊 statisticts, 🔍stats, 📑stats, 🔍 stats
CMD*/

let zero = Bot.getProperty("zero")
let cur=Bot.getProperty("cur")
let ad=452080432
let id =User.getProperty("msgid")
let ba = Libs.ResourcesLib.anotherUserRes("stwd", ad) 
let re = Libs.ResourcesLib.anotherUserRes("stre", ad) 
let bal=Libs.ResourcesLib.anotherUserRes("stdepo", ad);
let af = Libs.ResourcesLib.anotherUserRes("staf", ad) 
let total = Libs.ResourcesLib.anotherUserRes("sttotal", ad);
var art=Bot.getProperty("statisticts_button_text")
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

if(!art){
var g="*👥 Total Investors:* "+total.value()+"\n\n*➕ Total Investments:* "+bal.value().toFixed(8)+" "+cur+" \n\n*🔄 Total Reinvestments:* "+re.value().toFixed(8)+" "+cur+"\n\n*💳 Total Withdrawals:* "+ba.value().toFixed(8)+" "+cur
var par="markdown"
}else{
var Lang={
'mention':'<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>',
'name':valid_name,
'id':user.telegramid,
'totaldeposit':bal.value().toFixed(8),
'totalreinvest':re.value().toFixed(8),
'totalwithdraw':ba.value().toFixed(8),
'cur':cur,
'totalusers':total.value(),
'servertime':new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa'
})}
var g= art.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
var par="html"
}
Api.deleteMessage({ chat_id :  chat.chatid,message_id : id})
Api.sendMessage({chat_id:chat.chatid,text:g,parse_mode:par,reply_markup:{keyboard:[[{text:"⬅️ Return"}]],resize_keyboard:true}})

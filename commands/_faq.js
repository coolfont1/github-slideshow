/*CMD
  command: /faq
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⁉️ f.a.q, ℹf.a.q
CMD*/

let msg=Bot.getProperty("faq_button_text","*! No text settuped for FAQ button. set it on adminpanel* /adminlogin")
var cur=Bot.getProperty("cur")
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
let ar_t1=Bot.getProperty("faq_button_text")
var y='<a href="tg://user?id='+user.telegramid+'">'+valid_name+'</a>'
var Lang = {
 'first_name' :user.first_name,
'username':u_name,
'id':user.telegramid,
'name':valid_name,
'mention':y,
'cur':cur
};
if(!ar_t1){
var ho_t="<b>! No text setuped for info button. set it on adminpanel /adminlogin</b>"
}else{
var ho_t=ar_t1.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}
Api.sendMessage({chat_id:chat.chatid,text:ho_t,parse_mode:"html",disable_web_page_preview:true})

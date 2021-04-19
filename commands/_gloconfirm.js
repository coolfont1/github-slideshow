/*CMD
  command: /gloconfirm
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let hk3=Bot.getProperty("formatting_style","Markdown")
let hk4=Bot.getProperty("formatting_style")
let bn=Bot.getProperty("lastused_global_msg01", "Error")
let id=user.telegramid
let first_name=user.first_name
let last_name=user.last_name
let username=user.username

if(!last_name){
var valid_name=first_name
}else{
var valid_name=first_name+" "+last_name
}
if(!username){
var u_name= valid_name
}else{
var u_name=username
}
if(hk4!="HTML") {
var ttt=" ["+u_name+"]("+"tg://user?id="+id+")"
}else{
var ttt='<a href="tg://user?id='+id+'">'+valid_name+'</a>'
}
var Lang={
'first_name':first_name,
'id':id,
'name':valid_name,
'username':u_name,
'mention':ttt
}
var post_text=bn.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
Api.sendMessage({text:post_text,parse_mode:hk3,disable_web_page_preview:true})

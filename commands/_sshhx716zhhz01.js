/*CMD
  command: /sshhx716zhhz01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let f=message
let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(chat.chatid==ad){
function s(mes){
Bot.sendMessage(mes)
}
function e(xd){
Bot.editMessage(e,id)
}
if(request.forward_from_chat){
if(!request.forward_from_chat.username){
s("‼️* This channel dont have any username kindly set an username and try again*")
return
}
let usern=request.forward_from_chat.username

let username="@"+usern
Bot.setProperty("autopost",username,"string")
Bot.setProperty("autopoststatus","en","string")
}else{
s("📛 *Invaild forward.  Forward any message from a channel to continue try again*")
return
}
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("*Autopost stittings updated. Now bot will post all transactions autometically to the channel:* "+" `@"+request.forward_from_chat.username+"`\n\n"+"⚠️*WARNING:* _Autoposting will not work untill you did not made bot admin of that channel_",id)
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)}else{
Bot.runCommand("/start")}

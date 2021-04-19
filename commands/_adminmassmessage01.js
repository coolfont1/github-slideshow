/*CMD
  command: /adminmassmessage01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let po= Bot.getProperty("admin01")
if(chat.chatid==po){
let f_s=Bot.getProperty("formatting_style")
if(!f_s){
Bot.setProperty("formatting_style","HTML","string")
}
let f_d=Bot.getProperty("formatting_style",'HTML')
var b=[
[{title: "🔉 Global Message", command:"/globalmsg01"}, {title: "🛂 Private Message", command:"/privemsg01"}],[{title:"Formatting Style: ["+f_s+"]",command:"/changef-syle"}],
[{title:"📀 Broadcast Media",command:"/broadcastmediaadmin01" }],
[{title: "⬅️ Back To Sittings ", command:"/adminlogin r"}]]

var b2=[
[{text: "🔉 Global Message", callback_data:"/globalmsg01"}, {text: "🛂 Private Message", callback_data:"/privemsg01"}],[{text:"Formatting Style: ["+f_d+"]",callback_data:"/changef-syle"}],
[{text:"📀 Broadcast Media",callback_data:"/broadcastmediaadmin01" }],
[{text: "⬅️ Back To Sittings ", Command:"/adminlogin r"}]]
if(params){
if(params=="mkb") {
Bot.editInlineKeyboard(b,id)
return
}
}
let texty=" *Select a message reciver. You can Send Global or private message anytime.* \n- Kindly Select an option."
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:texty,parse_mode:"markdown",reply_markup:{inline_keyboard:b2}})
}else{
Bot.runCommand("/start")}

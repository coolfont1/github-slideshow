/*CMD
  command: /wijsjdndndjdieishddbhf82
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur=Bot.getProperty("cur")
let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let js=User.getProperty("lastusedn82827ebdh")
var type=js.type
var text=js.text
if(!type){return}
if(!text){return}
if(!message){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
return
}

let res=Libs.ResourcesLib.anotherUserRes(type, 452080432);

let amount=message*1
res.add(amount)

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
let ted=" Fake statisticts for  "+" *Total "+text+"* "+"Successfully added *"+message+" "+cur+"*"
var b =[
[{text:"Return ↩️",callback_data:"/fakeaddstsatifakestatictsadmin91"}, {text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
Api.editMessageText({chat_id:chat.chatid,text:ted,message_id:id,parse_mode:"markdown",reply_markup:{inline_keyboard:b}})
}else{
Bot.runCommand("/start")
}

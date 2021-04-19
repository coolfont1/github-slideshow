/*CMD
  command: /bordcastmedia08
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
if(!params){
Bot.sendMessage("Something went wrong")
return
}

var n=Bot.getProperty("lasttimeusedfilepath"+params)
let type=n.file_type
let file_id=n.file_id
if(!file_id){
Bot.sendMessage("Something went wrong")
return
}
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.sendInlineKeyboard(b,"✅_ Your operation for broadcasting_ "+"*"+type+"*"+" _has been successfull_",{on_result:"/settatt"})
let u1=Bot.getProperty("bot_total_users")
let u2=u1.list
if(type=="photo"){
for(var a in u2){
let u3=u2[a]
Api.sendPhoto({chat_id:u3,photo:file_id})
}
return
}
if(type=="gif"){
for(var b in u2){
Api.sendDocument({chat_id:u2[b],document:file_id})
}
return
}

if(type=="video"){
for(var c in u2){
Api.sendVideo({chat_id:u2[c],video:file_id})
}
return
}

if(type=="audio"){
for(var d in u2){
Api.sendAudio({chat_id:u2[d],audio:file_id})
}
return
}

if(type=="sticker"){
for(var e in u2){
Api.sendDocument({chat_id:u2[e],document:file_id})
}
return
}

if(type=="pdf"){
for(var g in u2){
Api.sendDocument({chat_id:u2[g],document:file_id})
}
return
}
}else{
Bot.runCommand("/start")
}

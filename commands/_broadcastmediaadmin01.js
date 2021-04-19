/*CMD
  command: /broadcastmediaadmin01
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
let u="_Select and Media option that you want to broadcast_\n\nAvialable Medias: ( *PHOTO*, *GIF*, *VIDEO*, *PDF*, *STICKER*) "

var b=[
[{title:"Broadcast Photo",command:"/broadphoto01"}, {title:"Broadcast Gif",command:"/adminbroadgif01"}],
[{title:"Broadcast Video",command:"/broadcastvideo01"},{title:"Broadcast PDF",command:"/adminbroadpdf01"}],
[{title:"Broadcast Sticker",command:"/adminbroadmediasticker01"}],
[{title:" Return↩️",command:"/adminmassmessage01"}, {title:"⬅️ Back To Settings",command:"/adminlogin r"}]]

var b2=[
[{text:"Broadcast Photo",callback_data:"/broadphoto01"}, {text:"Broadcast Gif",callback_data:"/adminbroadgif01"}],
[{text:"Broadcast Video",callback_data:"/broadcastvideo01"},{text:"Broadcast PDF",callback_data:"/adminbroadpdf01"}],
[{text:"Broadcast Sticker",callback_data:"/adminbroadmediasticker01"}],
[{text:" Return↩️",callback_data:"/adminmassmessage01"}, {text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:u,parse_mode:"markdown",reply_markup:{inline_keyboard:b2}
})
}else{
Bot.runCommand("/start")
}

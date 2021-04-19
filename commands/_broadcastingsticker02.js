/*CMD
  command: /broadcastingsticker02
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
if(!request.sticker){
Bot.sendMessage("*⛔ No STICKER founded on your message only send STICKER try again*")
return
}
let p=request.sticker
Bot.runCommand("/bordcastmediaphoto04"+" "+"sticker"+" "+p.file_id+" "+"STICKER")
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /broadcastingvideo02
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
if(!request.video){
Bot.sendMessage("⛔* No VIDEO Founded on your message only send Video file try again*")
return
}
let p=request.video
Bot.runCommand("/bordcastmediaphoto04"+" "+"video"+" "+p.file_id+" "+"VIDEO")
}else{
Bot.runCommand("/start")
}

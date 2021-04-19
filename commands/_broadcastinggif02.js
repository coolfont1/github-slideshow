/*CMD
  command: /broadcastinggif02
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

if(!request.document){
Bot.sendMessage("*! There is no GIF founded.Only send gif. Try again*")
return
}

var p=request.document
Bot.runCommand("/bordcastmediaphoto04"+" "+"gif"+" "+p.file_id+" "+"GIF")
}else{
Bot.runCommand("/start")
}

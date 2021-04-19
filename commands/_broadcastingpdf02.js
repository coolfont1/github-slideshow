/*CMD
  command: /broadcastingpdf02
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
Bot.sendMessage("*⛔ No DOCUMENT/PDF FILE founded on your message only send PDF file try again*")
return
}
let p=request.document
Bot.runCommand("/bordcastmediaphoto04"+" "+"pdf"+" "+p.file_id+" "+"DOCUMENT/PDF")
}else{
Bot.runCommand("/start")
}

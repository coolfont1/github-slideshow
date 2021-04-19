/*CMD
  command: /broadcastingphoto02
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
let p=request.photo[0]
if(!p){
Bot.sendMessage("*No photo Found only phots are vaild here. Try Again with correctly*")
return
}
Bot.runCommand("/bordcastmediaphoto04"+" "+"photo"+" "+p.file_id+" "+"PHOTO")
}else{
Bot.runCommand("/start")
}

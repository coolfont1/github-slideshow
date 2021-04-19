/*CMD
  command: /changef-syle
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
let f=Bot.getProperty("formatting_style","Markdown")
if(f=="Markdown"){
Bot.setProperty("formatting_style","HTML","string")
}else{
Bot.setProperty("formatting_style","Markdown","string")
}
}else{
return
}
Bot.runCommand("/adminmassmessage01 mkb")

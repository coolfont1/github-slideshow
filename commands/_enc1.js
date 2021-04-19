/*CMD
  command: /enc1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let arr=params.split(' ')
let ho=arr[0]
let idt=arr[1]
let gh=Bot.getProperty(ho+user.telegramid)
if(gh!="yes"){
Bot.setProperty(ho+user.telegramid,"yes","string")}else{
Bot.setProperty(ho+user.telegramid,"not","string")}
Bot.runCommand("/settings"+" "+request.message.message_id)

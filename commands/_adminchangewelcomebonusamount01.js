/*CMD
  command: /adminchangewelcomebonusamount01
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
let u="*Now send me the amount that bot will give bonus balance to the user when they register in the bot for first time*"
Bot.editMessage(u,id)
Bot.runCommand("/setnkwwelcomebonus01")
}else{
Bot.runCommand("/start")
}

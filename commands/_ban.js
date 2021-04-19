/*CMD
  command: /ban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let g=params
let ad=Bot.getProperty("admin01")
if(data.chat.chatid==ad){
Bot.setProperty("banuser"+g,"banned")
Bot.sendMessageToChatWithId(ad,"✅ User "+" ["+g+"]"+"(tg://user?id="+g+")"+" has beed banned successfully")
}

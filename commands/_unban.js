/*CMD
  command: /unban
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
if(chat.chatid==ad){
Bot.setProperty("banuser"+g,"unbanned","string")
Bot.sendMessageToChatWithId(ad,"✅ User "+" ["+g+"]"+"(tg://user?id="+g+")"+" has been Unbanned successfully")
}

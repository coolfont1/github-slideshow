/*CMD
  command: /dis
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid=User.getProperty("msgid")
if(params=="r"){
var g = [
[{title:" Current Status: ❌ Disabled",command:"/gref s"}],
[{title:"🔙 Go Back",command:"/et g"}]]
Bot.editMessage("❌ You have currently disabled notification of Gaining new refferral",msgid)
Bot.editInlineKeyboard(g)
Bot.setProperty("gnoti"+user.telegramid,"Not","string")
}

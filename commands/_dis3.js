/*CMD
  command: /dis3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var md =User.getProperty("msgid")
if(params=="x"){
Bot.editMessage("❌ You have currently Disabled notification of Investment started",md)
var g = [
[{title:" Current Status: ❌ Disabled",command:"/cref s"}],
[{title:"🔙 Go Back",command:"/et g"}]]
Bot.editInlineKeyboard(g)
Bot.setProperty("isnt"+user.telegramid,"Not","string")
}

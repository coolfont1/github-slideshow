/*CMD
  command: /dis2
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
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ Disabled",
  show_alert: "Top"
})
Bot.editMessage("❌ You have currently Disabled notification of Reciving refferral commission",md)
var g = [
[{title:" Current Status: ❌ Disabled",command:"/cref s"}],
[{title:"🔙 Go Back",command:"/et g"}]]
Bot.editInlineKeyboard(g)
Bot.setProperty("cnoti"+user.telegramid,"Not","string")
}

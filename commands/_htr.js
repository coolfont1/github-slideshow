/*CMD
  command: /htr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var is_alert = ( params!="top")
var b=[
[{title:"🔗 My Refferral Link",command:"/del"}]]
let h =User.getProperty("msgid2")
let xp = Bot.getProperty("RFH"+user.telegramid)
if(!xp){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "⚠️ No Refferral Investment Found",
  show_alert: is_alert})
}else{
Bot.editMessage("👬 Refferral Earning History 👬"+"\n\n"+xp,h)
Bot.editInlineKeyboard(b,h)
}

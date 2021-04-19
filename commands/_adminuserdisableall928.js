/*CMD
  command: /adminuserdisableall928
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
Bot.setProperty("anoti"+user.telegramid,"ygges","string")
Bot.setProperty("gnoti"+user.telegramid,"yenddns","string")
Bot.setProperty("cnoti"+user.telegramid,"yenxnxs","string")
Bot.setProperty("enoti"+user.telegramid,"yehdbxs","string")

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ Your all notification settings successfully disabled",
  show_alert: false })
Bot.runCommand("/settting"+" "+"t"+" "+params)
}

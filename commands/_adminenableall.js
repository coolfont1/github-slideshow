/*CMD
  command: /adminenableall
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
Bot.setProperty("anoti"+user.telegramid,"yes","string")
Bot.setProperty("gnoti"+user.telegramid,"yes","string")
Bot.setProperty("cnoti"+user.telegramid,"yes","string")
Bot.setProperty("enoti"+user.telegramid,"yes","string")


Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✅ Your all notification settings successfully enabled",
  show_alert: false // or false - for alert on top
})

Bot.runCommand("/settting"+" "+request.message.message_id)



}

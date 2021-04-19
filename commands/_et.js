/*CMD
  command: /et
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("msgid");
if(params=="g"){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🔔 Noification Sittings",
  show_alert: "Top"
})
let g = [[{title:"🔔 Gaining new refferral Notification",command:"/gref j"}],
[{title:"🔔 Commission recived Notification",command:"/cref j"}],
[{title:"🔔 Investment Started Notification",command:"/isnt"}],
[{title:"🔙 Back to Sitting",command:"/sitt f"}]]
Bot.editMessage("🔔 Choose your sittings for getting notification you can disable or enable the listed notifications anytime",msgid)
Bot.editInlineKeyboard([[{title:"🔔 Gaining new refferral Notification",command:"/gref j"}],
[{title:"🔔 Commission recived Notification",command:"/cref j"}],
[{title:"🔔 Investment Started Notification",command:"/isnt j"}],
[{title:"🔙 Back to Sitting",command:"/sitt f"}]], msgid)
}

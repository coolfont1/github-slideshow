/*CMD
  command: /cref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let md=User.getProperty("msgid")
if(params=="s"){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✅ Enabled",
  show_alert: "Top"
})
Bot.editMessage("✅ You have currently Enabled notification of Reciving refferral Commission",md)
Bot.editInlineKeyboard([[{title:" Current Status: ✅ Enabled",command:"/dis2 x"}],[{title:"🔙 Go Back",command:"/et g"}]])
Bot.setProperty("cnoti"+user.telegramid,"Yes","string")
}
if(params=="j"){
let h = Bot.getProperty("cnoti"+user.telegramid)
if(h=="Yes"){
Bot.editMessage("✅ You have currently Enabled notification of Reciving refferral Commission",md)
Bot.editInlineKeyboard([[{title:" Current Status: ✅ Enabled",command:"/dis2 x"}],[{title:"🔙 Go Back",command:"/et g"}]]
)}else{
Bot.editMessage("❌ You have currently Disabled notification of Reciving refferral commission",md)
Bot.editInlineKeyboard([[{title:" Current Status: ❌ Disabled",command:"/cref s"}],[{title:"🔙 Go Back",command:"/et g"}]])}}

/*CMD
  command: /gref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid=User.getProperty("msgid")
if(params=="s"){
Bot.editMessage("✅ You have currently Enabled notification of Gaining new refferral",msgid)
Bot.editInlineKeyboard([[{title:"Current status: ✅ Enabled",command:"/dis r"}],[{title:"🔙 Go Back",command:"/et g"}]])

Bot.setProperty("gnoti"+user.telegramid,"Yes","string")
}
if(params=="j"){
let h = Bot.getProperty("gnoti"+user.telegramid)
if(h=="Yes"){
Bot.editMessage("✅ You have currently Enabled notification of Gaining new refferral",msgid)
Bot.editInlineKeyboard([[{title:"Current status: ✅ Enabled",command:"/dis r"}],[{title:"🔙 Go Back",command:"/et g"}]]

)}else{
Bot.editMessage("❌ You have currently Disabled notification of Gaining new refferral",msgid)
Bot.editInlineKeyboard([[{title:"Current status: ❌ Disabled",command:"/gref s"}],[{title:"🔙 Go Back",command:"/et g"}]])}}

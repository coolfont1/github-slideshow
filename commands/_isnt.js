/*CMD
  command: /isnt
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
Bot.editMessage("✅ You have currently Enabled notification of Investment started",md)
Bot.editInlineKeyboard([[{title:" Current Status: ✅ Enabled",command:"/dis3 x"}],[{title:"🔙 Go Back",command:"/et g"}]])
Bot.setProperty("isnt"+user.telegramid,"Yes","string")
}
if(params=="j"){
let h = Bot.getProperty("isnt"+user.telegramid)
if(h=="Yes"){
Bot.editMessage("✅ You have currently Enabled notification of Investment Started",md)
Bot.editInlineKeyboard([[{title:" Current Status: ✅ Enabled",command:"/dis3 x"}],[{title:"🔙 Go Back",command:"/et g"}]],md)
}else{
Bot.editMessage("❌ You have currently Disabled notification of Investment Started",md)
Bot.editInlineKeyboard([[{title:" Current Status: ❌ Disabled",command:"/isnt s"}],[{title:"🔙 Go Back",command:"/et g"}]],md)}}

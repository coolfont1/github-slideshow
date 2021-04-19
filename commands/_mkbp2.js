/*CMD
  command: /mkbp2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("msgid5")
let h = Bot.getProperty("withdrawals2"+user.telegramid)
var b =[
[{title:"⏪ Previous",command:"/ht2"}, {title:"Page: 2/5", command:"dhnxnxjxjxh"},{title:"⏩ Next",command:"/mkbp3"}],
[{title:"🎖 My Investments",command:"/ht1"}]]
if(!h){
Bot.editMessage("Withdrawal History page 5/2 here you can find last 11-20 th Withdrawals List. \n\n❇️ No History Founded",id)
Bot.editInlineKeyboard(b,id)}else{
Bot.editMessage(h,id)
 Bot.editInlineKeyboard(b,id)}

/*CMD
  command: /mkbp3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("msgid5")
let h = Bot.getProperty("withdrawals3"+user.telegramid)
var b =[
[{title:"⏪ Previous",command:"/mkbp2"}, {title:"Page: 3/5", command:"dhnxnxjxjxh"},{title:"⏩ Next",command:"/mkbp4"}],
[{title:"🎖 My Investments",command:"/ht1"}]]
if(!h){
Bot.editMessage("Withdrawal History page *3/5* here you can find last 21-30 th Withdrawals List. \n\n❇️* 3/5: No History Founded*",id)
Bot.editInlineKeyboard(b,id)}else{
Bot.editMessage(h,id)
 Bot.editInlineKeyboard(b,id)}

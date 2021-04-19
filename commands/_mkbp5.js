/*CMD
  command: /mkbp5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("msgid5")
let h = Bot.getProperty("withdrawals5"+user.telegramid)
var b =[
[{title:"⏪ Previous",command:"/mkbp4"}, {title:"Page: 5/5", command:"dhnxnxjxjxh"}],
[{title:"🎖 My Investments",command:"/ht1"}]]
if(!h){
Bot.editMessage("Withdrawal History page *4/5* here you can find last 41-50 th Withdrawals List. \n\n❇️* 5/5: No History Founded*",id)
Bot.editInlineKeyboard(b,id)}else{
Bot.editMessage(h,id)
 Bot.editInlineKeyboard(b,id)}

/*CMD
  command: /mkbp4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("msgid5")
let h = Bot.getProperty("withdrawals4"+user.telegramid)
var b =[
[{title:"⏪ Previous",command:"/mkbp3"}, {title:"Page: 4/5", command:"dhnxnxjxjxh"},{title:"⏩ Next",command:"/mkbp5"}],
[{title:"🎖 My Investments",command:"/ht1"}]]
if(!h){
Bot.editMessage("Withdrawal History page *4/5* here you can find last 31-40 th Withdrawals List. \n\n❇️* 4/5: No History Founded*",id)
Bot.editInlineKeyboard(b,id)}else{
Bot.editMessage(h,id)
 Bot.editInlineKeyboard(b,id)}

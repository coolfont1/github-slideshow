/*CMD
  command: /setwallletedit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💾 wallet, 🔐set wallet, 💳 set doge, 💼 wallet wallet, 🖥 change wallet, 💳 set ltc wallet, 💼 wallet, 💼 my wallet
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}

var b=[
[{title:"💼 Set/ Change Wallet",command:"/sewa"}]]
let wall=Bot.getProperty("wallet"+user.telegramid)

if(!wall){
User.setProperty("walletuserid","not set","string")}else{
User.setProperty("walletuserid",wall,"string")}
var wagas=User.getProperty("walletuserid")
let cur=Bot.getProperty("cur")
Bot.sendInlineKeyboard(b,"💡* Your currently set "+cur+" wallet is: *"+" `"+wagas+"`\n\n💹 It will be used for *all future withdrawals.*",{on_result:"/setxms"})

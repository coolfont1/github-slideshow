/*CMD
  command: /showref0177
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let bot_username=Bot.getProperty("bot_username")

var b=[
[{title:"⌛️ Generating Refs Report ⌛️",url:"https://t.me/share/url?url=https://t.me/"+bot.name+"?start="+user.telegramid}]]
Bot.editInlineKeyboard(b,params)
let r=Bot.getProperty("activereflistinv"+user.telegramid)
if(r){
Bot.sendMessage("📑 Advanced Active Referrals Report\n\n"+r)}else{
Bot.sendMessage("📑 Advanced Active Referrals Report\nNot any Invest")}
}

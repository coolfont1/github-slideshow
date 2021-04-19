/*CMD
  command: /sitt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⚙ settings, ⚙ tools
CMD*/

let msgid = User.getProperty("msgid");
let x = User.getProperty("walletaddress")
let ba= Bot.getProperty("banuser"+user.telegramid)
if(ba!="banned"){
if(params=="f"){
var j= [
[{title: "💳 Wallet Sittings", command:"/st g"},
{title:"🔔 Notification Sittings", command:"/settings r"}],
[{title:"📎 Information Links",command:"/lt r"},
{title:"🖥 Profit Calculator",command:"/profiedit"}],[{title:"🤖 Bot Statisticts",command:"/stabitas"}]
]
Bot.editMessage(user.first_name+" Select and option you want  to manage",msgid)&Bot.editInlineKeyboard(j,msgid)
}else{
Api.deleteMessage({
chat_id : chat.chatid,
message_id : msgid
})
var st =[
[{title: "💳 Wallet Sittings", command:"/st"},
{title:"🔔 Notification Sittings", command:"/settings r"}],
[{title:"📎 Information Links",command:"/lt r"},
{title:"🖥 Profit Calculator",command:"M"}],[{title:"🤖 Bot Statisticts",command:"/stabitas"}]
]
Bot.sendInlineKeyboard(st,user.first_name+ " Kindly Select an option You want to manage",{on_result:"/settaki"})
}}

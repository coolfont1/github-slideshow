/*CMD
  command: /st
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("msgid");
let p =Bot.getProperty("wallet"+user.telegramid)
Bot.editMessage("🔒 Your current wallet address is:\n"+p+" \n\n✅ You can change your wallet address anytime you want just click on change wallet address button for change it",msgid)

if(!p){
var ga = [[{title:"❌ No adddress ❌ ",command:"/dst g"}],
[{title: "✏️ Set Wallet address", command:"/dst g"}],
[{title:" 🔙 Back to Sittings ",command:"/sitt f"}]]
Bot.editInlineKeyboard(ga,msgid)}else{
var g = [[{title:p,command:"/dst g"}],
[{title: "✏️ Change Wallet address", command:"/dst g"}],
[{title:" 🔙 Back to Sittings ",command:"/sitt f"}]]
Bot.editInlineKeyboard(g,msgid)}

/*CMD
  command: /was
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let p = User.getProperty("wallet")
if(params=="g"){
if(!p){
var ga = [[{title:"❌ No adddress ❌ ",command:"/dst g"}],
[{title: "✏️ Set Wallet address", command:"/dst g"}],
[{title:" 🔙 Back to Sittings ",command:"/sitt f"}]]

Bot.editInlineKeyboard(ga)}else{
var g = [[{title:p,command:"/dst g"}],
[{title: "✏️ Change Wallet address", command:"/dst g"}],
[{title:" 🔙 Back to Sittings ",command:"/sitt f"}]]
Bot.editInlineKeyboard(g,{on_result:'/settaki'})}}

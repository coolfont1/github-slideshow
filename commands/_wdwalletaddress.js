/*CMD
  command: /wdwalletaddress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wall =User.getProperty("walletaddress")
if(!wall){
var b =
[{title:"Set Wallet Address",command:"/setwa"}]
Bot.sendInlineKeyboard(b,"New text")}else{
Bot.runCommand("/wdprivate500")}

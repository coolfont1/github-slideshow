/*CMD
  command: /wdcheckup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🔼 withdraw, ➖ payout ➖, ♐️ withdraw
CMD*/

let wsd= Bot.getProperty("wddismessage")
let bal = Libs.ResourcesLib.userRes("balance")
let wall =Bot.getProperty("wallet"+user.telegramid)
let cur=Bot.getProperty("cur")
let zero=Bot.getProperty("zero")
let ds=Bot.getProperty("wdendisstats01")
let min=Bot.getProperty("adminminwd01")
var mini=min*1
let dx=mini-bal.value()
let ban=Bot.getProperty("banuser"+user.telegramid)
if(ban!="banned"){
if(!wall){
var buttons=[
[{title:"➕ Set Wallet Address",command:"/sewa"}]]
Bot.sendInlineKeyboard(buttons,"❌ I did not find any wallet address on your acount. Please setup your wallet address first",{on_result:"/setxms"})}else{
if(ds!="en"){
if(bal.value()>=mini){
Bot.runCommand("/wdprivate499")
}else{
Bot.sendMessage("❌ You dont have enough balance for withdrawal.\n\n🔒 Minimum withdrawal:\n "+mini.toFixed(zero)+" "+cur+" "+" \n"+"🏷 Your avialable balance: "+bal.value().toFixed(zero)+" "+cur+"\n💡 Need More Balance:\n"+dx.toFixed(zero)+" "+cur)}
}else{
Bot.sendMessage(wsd)
}}}

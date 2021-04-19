/*CMD
  command: /reff
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ✉️ invite friends, 🎉 invite friends, 🔗 refferral
CMD*/

let g= Bot.getProperty("refc01")
let l2= Libs.ResourcesLib.userRes("refl2")
let cur= Bot.getProperty("cur")
let zero = Bot.getProperty("zero")
let bonus = Libs.ResourcesLib.userRes("bonus");
let rinv = Libs.ResourcesLib.userRes("refinv");
let pat = Libs.ResourcesLib.userRes("ref");
let res = Libs.ResourcesLib.userRes("ref");
var lr =User.getProperty("up")
let z =User.getProperty("Reffer")
let bann=Bot.getProperty("banuser"+user.telegramid)
if(bann!="banned"){

if(!lr){
User.setProperty("rd","❌ No Upline","string")}else{
User.setProperty("rd",lr,"string")}
let gr = User.getProperty("rd")
var buttons = [
[{title: " 💰 Refferral Earnings History",command:"/htr"}],
    [ {title: "🔗 My Refferral Link", command: "/del" } ]]
Bot.sendInlineKeyboard(buttons,"👥 Refferral Program:\n\n👥 Invite your friends by your reffer link earn free "+cur+"\n\n🏆 - "+g+"%\n\n🔼 My Upline: "+gr +"\n\n🔱 Refferral Statisticts:\n\nTotal Refferral: "+pat.value()+" \n"+" \n💲 Total Refferral Deposits:\n"+rinv.value().toFixed(zero)+" "+cur+"\n🎁 Total Bonus Earned:\n"+bonus.value().toFixed(zero)+" "+cur,{on_result:"/setprop"})}

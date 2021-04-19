/*CMD
  command: /info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur= Bot.getProperty("cur")
let zero = Bot.getProperty("zero")
if(params){
let id = params
let g1=Bot.getProperty("wallet"+id)
if(g1==null){
User.setProperty("wget","❌ Not Set","string")}else{
User.setProperty("wget",g1,"string")}
let geta =User.getProperty("wget")
let rin = Libs.ResourcesLib.anotherUserRes("refinv", id);
let bal = Libs.ResourcesLib.anotherUserRes("balance", id);
let investment = Libs.ResourcesLib.anotherUserRes("investment", id);
let Reinvest = Libs.ResourcesLib.anotherUserRes("reinvest", id);
let bonus = Libs.ResourcesLib.anotherUserRes("bonus", id);
let wd = Libs.ResourcesLib.anotherUserRes("withdraw", id);

Bot.sendMessage("👨‍💻User: "+" ["+id+"]"+"(tg://user?id="+id+")"+"\n\nWithdrawable Balance:\n"+bal.value().toFixed(zero)+" "+cur+"\nTotal investments:\n"+investment.value().toFixed(zero)+" "+cur+"\nTotal Re-investment\n"+Reinvest.value().toFixed(zero)+" "+cur+"\nTotalAffiliate BonusEarned:\n"+bonus.value().toFixed(zero)+" "+cur+"\nTotalWithdrawn:\n"+wd.value().toFixed(zero)+" "+cur+" \nTotal Refferral Deposits:\n"+rin.value().toFixed(zero)+" "+cur+" \n\nUser Wallet Address: "+" \n"+"`"+g1+"`")

}

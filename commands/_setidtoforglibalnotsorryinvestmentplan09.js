/*CMD
  command: /setidtoforglibalnotsorryinvestmentplan09
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let cur =Bot.getProperty("cur","⛔")
let exp=Bot.getProperty("daily_expired","⛔")
let pln1=Bot.getProperty("daily_amount1","⛔")
let pln2=Bot.getProperty("daily_amount2","⛔")
let pln3=Bot.getProperty("daily_amount3","⛔")
let mnm=Bot.getProperty("minimuminvestment","⛔")
let daily1=Bot.getProperty("daily_value1","⛔")
let daily2=Bot.getProperty("daily_value2","⛔")

let msg="_Here is your currently settuped investment plan_\n\n"+"🈯️* Investment Plan:*\n1⃣ From "+mnm+" "+cur+" to "+daily1+ " "+cur+"\n"+pln1+" % Daily for "+exp+ " Days\n\n2⃣ From "+daily1+" "+cur+" to "+daily2+ " "+cur+"\n"+pln2+" % Daily for "+exp+ "Days\n\n3⃣ More than "+daily2+" "+cur+" \n"+pln3+" Daily for "+exp+" Days"
Bot.editMessage(msg,id)

var b=[
[{title:"🈯️ Change Investment Plan",command:"/invedtmentplanadmin01"}],
[{title:"⌛ Expired Date",command:"/amjxhxhdhdhzrei01"}],
[{title:"Return ↩️ ",command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /reinvest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ♻️ re-invest, rein🎲vest, 🔁 reinvest, ♻ reinvest, ➕ reinvest
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}

let mnt=Bot.getProperty("minimuminvestment")
let mnm=mnt*1
var min=Bot.getProperty("minimuminvestment")
let cur=Bot.getProperty("cur")
let daily_amount=Bot.getProperty("daily_amount1")
let daily_expired=Bot.getProperty("daily_expired")
var depo="➕* Welcome! Here you can start a new investment!*\n\n💵 We offer a single Investment plan, able to offer you the best profit!\n\n➡ Our plan starts from "+min+" "+cur+"*\n\n⏱ Profit will be credited *"+daily_amount+"% every 24 hours, for "+daily_expired+" days: "+daily_amount+"% daily!\n📆 Paid on Every Day"
Bot.sendMessage(depo)
let bal = Libs.ResourcesLib.userRes("balance");
if(bal.value()<mnm){
Bot.sendKeyboard("⬅️ Return","*❌ You can not reinvest right now:* You need at least  "+mnm+" "+cur+" to reinvest!")
}else{
var zero=Bot.getProperty("zero")
let iad=User.getProperty("msgid89")
let bal = Libs.ResourcesLib.userRes("balance");
let mnz=Bot.getProperty("minimuminvestmentstatus")
let mnt=Bot.getProperty("minimuminvestment")
let mnm=mnt*1
var g1=bal.value()*0.25
var g2=bal.value()*0.5
var g3=bal.value()*0.75
var b=[
[{title:"25%",command:"/reio "+g1}, {title:"50%",command:"/reio "+g2}, {title:"75%",command:"/reio "+g3},{title:"100%",command:"/reio "+bal.value()}],
[{title:"Type amount manually",command:"/reinvesttypemanual01"}]
]
var h="♻️Select the amount you want to Re-invest or type amount manually\n\n✅ *Avialable balance:* "+bal.value().toFixed(zero)+" "+cur+"\n"+" ⚜ *Minimum Re-invest:* "+mnm+" "+cur+" \n\n*25%*= "+g1.toFixed(zero)+" "+cur+" \n*50%*= "+g2.toFixed(zero)+" "+cur+" \n*75%*= "+g3.toFixed(zero)+" "+cur+" \n*100%*= "+bal.value().toFixed(zero)+" "+cur
Api.deleteMessage({chat_id:chat.chatid,message_id:iad})
Bot.sendInlineKeyboard(b,h,{on_result:"/resultsetidfordel"})
}

/*CMD
  command: /adminwdsett01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
let ds=Bot.getProperty("wdendisstats01")
if(data.chat.chatid==ad){
var tr=[{title:"🕘 Pending Withdrawals",command:"/pendingwdcoinfirmadmin01ch"}]
if(ds!="en"){
var b=[
[{title:"📍 Minimum withdraw",command:"/adminminwd01"}, {title:"❌Disable Withdrawal ",command:"/admindiswd01"}],[{title:"🏧 Auto Withdrawal",command:"/adminautowdset01"},{title:"📍 Maximim withdraw",command:"/adminmaxwd01"}],
[{title:"🕘 Manage Pending Withdrawals",command:"/pendingwdcoinfirmadmin01ch"}],
[{title:"⬅️ Back To Sittings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
var bd=[
[{title:"📍 Minimum withdraw",command:"/adminminwd01"}, {title:"✅ Enable Withdrawal ",command:"/adminwdenst01"}],[{title:"🏧 Auto Withdrawal",command:"/adminautowdset01"},{title:"📍 Maximim withdraw",command:"/adminmaxwd01"}],
[{title:"🕘 Manage Pending Withdrawals",command:"/pendingwdcoinfirmadmin01ch"}],
[{title:"⬅️ Back To Sittings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(bd,id)
}
}else{
Bot.runCommand("/start")}

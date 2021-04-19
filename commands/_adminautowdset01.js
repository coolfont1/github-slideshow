/*CMD
  command: /adminautowdset01
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
let g=Bot.getProperty("autowithdrawal01","disabled")
if(chat.chatid==ad){
var b=[
[{title:"✅ Enable",command:"/adminwden01"}, {title:"❌ Disable",command:"/adminautowddis01"}],
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editMessage("Select you want to disable or enable Instant Withdrawal"+" \nCurrent Status: "+"*"+g+"*", id)
Bot.editInlineKeyboard(b,id)}else{
Bot.runCommand("/start")}

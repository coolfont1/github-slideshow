/*CMD
  command: /adminwden01
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
if(chat.chatid==ad){
Bot.setProperty("autowithdrawal01","enabled","string")
Bot.editMessage("Auto Withdrawal settings updated"+"\n Current Status: "+"✅ Enabled", id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)}else{
Bot.runCommand("/start")}

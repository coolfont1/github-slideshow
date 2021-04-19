/*CMD
  command: /adminwdenst01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(data.chat.chatid==ad){
Bot.setProperty("wdendisstats01","dhbx","string")
Bot.editMessage("✅ Your withdrawa Sitting updated successfully"+"\n\n⚙ Current Status: "+"\n✅ Withdrawal Enabled",id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

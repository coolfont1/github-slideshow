/*CMD
  command: /adminsetwelcomebonus01
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
var cur=Bot.getProperty("cur")
let bonus=Bot.getProperty("welcome_bonus")
let bonus_st=Bot.getProperty("welcome_bonus_status","dis")
if(bonus_st!="en"){
var u="❌*Disabled*"
var msg="📊 Welcome Bonus Status: "+u+" \n\nSelect an option from the list bellow"
var b=[
[{title:"⚙ Enable/Change Amount",command:"/adminchangewelcomebonusamount01"}],
[{title:"❌ Disable Bonus",command:"/admindisablewelcomebonus01"}],
[{title:"Return ↩️",command:"/adminmainsettings01"}, {title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
}else{
var u="✅ *Enabled*"
var msg="📊 Welcome bonus Status: "+u+" \n🎁 Bonus Amount: *"+bonus+" "+cur+"*"+" \n\nKindly select an option from the list bellow"
var b=[
[{title:"⚙ Change Amount",command:"/adminchangewelcomebonusamount01"}],
[{title:"❌ Disable Bonus",command:"/admindisablewelcomebonus01"}],
[{title:"Return ↩️",command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
}
Bot.editMessage(msg,id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

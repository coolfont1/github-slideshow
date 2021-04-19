/*CMD
  command: /adminrefferral01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let d = User.getProperty("adminmsgid")
let admin= Bot.getProperty("admin01")
let ref= Bot.getProperty("refc01","⛔ Not set")
let ref2=Bot.getProperty("refc02"," ⛔ Not Set")
var ref3=Bot.getProperty("refc03", " ⛔Not Set")
if(data.chat.chatid==admin){
Bot.editMessage("✅ Current Refferral Commission  status:\n\n*Level°1*-  "+ref+"%\n*Level°2*- "+ref2+" %"+"\n"+"*Level°3*- "+ref3+" %",d)
var b=[
[{title:" ⚙ Change Refferral Commission %",command:"/changeref01"}],[{title:" ↩️ Return",command:"/adminmainsettings01 r"},
 {title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,d) 
}else{
Bot.runCommand("/start")}

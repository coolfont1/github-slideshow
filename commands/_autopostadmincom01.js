/*CMD
  command: /autopostadmincom01
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
let j=Bot.getProperty("autopost")
let st=Bot.getProperty("autopoststatus")
if(st!='en'){
var r="_Select an option from the buttons bellow_\n\n*Your Current Autoposting Channel:* ❌ Disabled"

var b=[
[{title:"⚙ Enable/Change Current Channel",command:"/autpo90"}],
[{title:"Return ↩️", command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
}else{
var r="_Select an option from the buttons bellow_\n\n*Your Current Autoposting Channel:* "+j
var b=[
[{title:"⚙ Enable/Change Current Channel",command:"/autpo90"}],
[{title:"❌ Disable Autopost",command:"/admindisautopjshdjd01"}],
[{title:"Return ↩️", command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
}
Bot.editMessage(r,id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

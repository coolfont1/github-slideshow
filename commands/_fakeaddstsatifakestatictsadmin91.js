/*CMD
  command: /fakeaddstsatifakestatictsadmin91
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
var b=[
[{text:"Add Fake Total Investors ",callback_data:"/addfake01"+" "+"sttotal"+" "+"Investors"}],
[{text:"Add Fake Total Deposits ",callback_data:"/addfake01"+" "+"stdepo"+" "+"Deposits"}],
[{text:"Add Fake Total Reinvestments", callback_data:"/addfake01"+" "+"stre"+" "+"Re-investments"}],
[{text:" Add Fake Total Withdrawals",callback_data:"/addfake01"+' '+"stwd"+" "+"Withdrawals"}],
[{text:"Return ↩️",callback_data:"/adminmainsettings01"},{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]

var msg_html='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+" <b>Select an method from the list bellow that you want to add as fake statisticts</b>"
Api.editMessageText({chat_id:chat.chatid,text:msg_html,message_id:id,reply_markup:{inline_keyboard:b},parse_mode:"html"})
}else{
Bot.runCommand("/start")
}

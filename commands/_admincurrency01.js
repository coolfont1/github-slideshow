/*CMD
  command: /admincurrency01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let px=Bot.getProperty("admin01")
if(chat.chatid==px){
let cur =Bot.getProperty("cur","⛔️ Not Set")
let id=User.getProperty("adminmsgid")
var b=[
[{text: "💡 Change Currency", callback_data:"/changecur01"}],
[{text:"Return ↩️",callback_data:"/adminmainsettings01 r"},{text:"⬅️ Back To Sittings", callback_data:"/adminlogin r"}]]
let txt="📍 Current Bot Currency: *"+cur+"* \n\n- _Click On Change Currency For Change Bot Currency_"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"Markdown",reply_markup:{inline_keyboard:b}})
}else{
Bot.runCommand("/start")}

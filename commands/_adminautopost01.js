/*CMD
  command: /adminautopost01
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
let text=Bot.getProperty("withdrawal_channel_text","Settuped with default Value")
var b=[
[{text:"🔃 Reset To Deafult",callback_data:"/resetdjdx927efaultdepositrext01"}, {text:"⚙ Change Current",callback_data:"/changedataforbuttondeposiwithdrawalttext"}],
[{text:"Return ↩️",callback_data:"/setuptexts01"},{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
let r="<b>Here is your currently setupped text for Autoposting on  WITHDRAWAL channel</b>\n------------------------------------------------\n<code>"+text+"</code>\n------------------------------------------------\n<i>Select and option from the list bellow</i>"

Api.editMessageText({chat_id:chat.chatid,text:r,message_id:id,parse_mode:"html",reply_markup:{inline_keyboard:b}})
}else{
Bot.runCommand("/start")
}

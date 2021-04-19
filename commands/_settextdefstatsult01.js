/*CMD
  command: /settextdefstatsult01
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
Bot.setProperty("statisticts_button_text",false,"boolean")
var tps="*Text for STATISTICTS button has been successfully reseted to deafult value*"
var b=[
[{text:"Return ↩️",callback_data:"/setuptexts01"},{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:tps,parse_mode:'markdown',reply_markup:{inline_keyboard:b}})
}else{
Bot.runCommand("/start")
}

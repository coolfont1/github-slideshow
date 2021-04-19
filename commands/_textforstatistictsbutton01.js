/*CMD
  command: /textforstatistictsbutton01
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
var line="------------------------------------------------"

var art=Bot.getProperty("statisticts_button_text","Settuped with deafult value")

var h="*Here is your currently setupped text for STATISTICTS button*"+" \n"+line+"\n`"+art+"`\n"+line+"\n_Select and option from the list bellow_"
var b=[
[{text:"🔀 Set Deafult Text ",callback_data:"/settextdefstatsult01"}, {text:"⚙ Change Current Text", callback_data:"/on01setstatisticts01"}],
[{text:"Return ↩️", callback_data:"/setuptexts01"},{text:"⬅️ Back To Settings", callback_data:"/adminlogin r"}]]
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:h,parse_mode:"markdown",reply_markup:{inline_keyboard:b}})
}

/*CMD
  command: /setuptexts01
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
if(chat.chatid==user.telegramid){
var b=[
[{title:"➕ Welcome Text",command:"/welctext01admin"}],
[{title:"📱 Acount Button Text",command:"/confirmacountbuttontext01"}],
[{title:"📤  Withdrawals Channel Text",command:"/adminautopost01"}],
[{title:"🖋 Deposits Channel Text ",command:"/depositchanneltextadmin01"}],
[{title:" ℹ️Info button Text",command:"/admininfotext01"}],[{title:"⁉️ FAQ button Text",command:"/adminfaqtext01"}],
[{title:"⬅️ Back To Settings", command:"/adminlogin r"}]]

var b2=[
[{text:"➕ Welcome Text",callback_data:"/welctext01admin"}],
[{text:"📱 Acount Button Text",callback_data:"/confirmacountbuttontext01"}],
[{text:"📤  Withdrawals Channel Text",callback_data:"/adminautopost01"}],
[{text:"🖋 Deposits Channel Text ",callback_data:"/depositchanneltextadmin01"}],
[{text:"📊 Statisticts Button Text",callback_data:"/textforstatistictsbutton01"}],
[{text:" ℹ️Info button Text",callback_data:"/admininfotext01"}],[{text:"⁉️ FAQ button Text",callback_data:"/adminfaqtext01"}],
[{text:"⬅️ Back To Settings", callback_data:"/adminlogin r"}]]
let txt='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+" <b>Select and option from the list bellow that you want to change</b>"
Api.editMessageText({chat_id:chat.chatid,text:txt,message_id:id,parse_mode:"html",reply_markup:{inline_keyboard:b2}})
}else{
Bot.runCommand("/start")
}

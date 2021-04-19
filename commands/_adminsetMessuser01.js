/*CMD
  command: /adminsetMessuser01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id =User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(chat.chatid==ad){
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

let te=Bot.getProperty("usermes01")
Bot.setProperty("lastmess10",message,"string")
//Bot.sendMessageToChatWithId(te,message)
//Bot.editMessage("Your private message has been successfully sent to the user: "+" ["+te+"]"+"("+"tg://user?id="+te+")", id)
let hk=Bot.getProperty("formatting_style","Markdown")
if(hk=="Markdown"){
var th="["+te+"]"+"("+"tg://user?id="+te+")"
}else{
var th='<a href="tg://user?id='+te+'">'+te+'</a>'
}
var line="------------------------------------------------"
var gf="Message for user: "+th+" \n"+line+"\n"+message
Api.editMessageText({chat_id:chat.chatid,text:gf,message_id:id,parse_mode:hk})
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
var bi=[
[{title:"✅ Confirm Message",command:"/confirmprivmesadmin018 con"},{title:"⛔️ Cancell",command:"/confirmprivmesadmin018 dis"}]]
Bot.editInlineKeyboard(bi,id)
}else{
Bot.runCommand("/start")}

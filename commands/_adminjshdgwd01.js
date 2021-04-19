/*CMD
  command: /adminjshdgwd01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let s=data.message
let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
if(data.chat.chatid==ad){
Bot.setProperty("wddismessage",s,"string")
Bot.setProperty("wdendisstats01","en","string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("✅ Your withdrawa Sitting updated successfully"+"\n\n⚙ Current Status: "+"❌ Withdrawal Disabled",id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

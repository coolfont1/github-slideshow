/*CMD
  command: /adminmaxwdsetup01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*CMD
  command: /adminminwdsettup01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
//let min=Bot.getProperty("adminminwd01")
if(data.chat.chatid==ad){
Api.deleteMessage({chat_id:data.chat.chatid,message_id:request.message_id})
Bot.setProperty("maxwd",message,"string")
Bot.editMessage("✅ Maximum withdrawal successfully updated to "+data.message,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}


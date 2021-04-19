/*CMD
  command: /checnowbal01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=data.message
let rin = Libs.ResourcesLib.anotherUserRes("balance", id);
let adm=Bot.getProperty("admin01")
let mg=User.getProperty("adminmsgid")
if(data.chat.chatid==adm){
let x="👨‍💻 User: "+"[" +id+ "](tg://user?id=" +id+ ")" +"\n\n"+"💰 User Balance: "+rin.value().toFixed(8)
Api.deleteMessage({chat_id:adm,message_id:request.message_id})
Bot.editMessage(x,mg)
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,mg)
}else{
Bot.runCommand("/start")}

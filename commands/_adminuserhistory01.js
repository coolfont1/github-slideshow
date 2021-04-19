/*CMD
  command: /adminuserhistory01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b=[
[{title:" 🎖 Get User Investment History",command:"/administht01"}], [{title:"💸 Get User Withdrawal History",command:"/getWdht01admin"}],
[{title:" 👬 Get User Refferral Earning History",command:"/admingetrefferralhistory01"}],
[{title:" ⬅️ Back To Sittings",command:"/adminlogin r"}]]
var b=[
[{text:" 🎖 Get User Investment History",callback_data:"/administht01"}], [{text:"💸 Get User Withdrawal History",callback_data:"/getWdht01admin"}],
[{text:" 👬 Get User Refferral Earning History",callback_data:"/admingetrefferralhistory01"}],
[{text:" ⬅️ Back To Sittings",callback_data:"/adminlogin r"}]]

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(data.chat.chatid==ad){
var i="✅ Select and way of getting user history. You can get any user investment and withdrawal history by entering user id.  User must need to start bot"
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:i,parse_mode:"markdown",reply_markup:{inline_keyboard:b}})
}else{
Bot.runCommand("/start")}

/*CMD
  command: /onsetkeyboardbutton91
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad =Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let art=Bot.getProperty("art","🛑 *Not Set*")
Bot.editMessage("*Here is your currently setupped button design for your bot*\n\n*Buttons -*  "+inspect(art)+" \n\n_Click on the bellow button to change buttons_",id)
var b=[
[{title:"⚙ Change Buttons",command:"/admineditbuttonbot01"}],[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

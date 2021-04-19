/*CMD
  command: /adminusersettings01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{title:"👁 Check User Balance ",command:"/admincheckbal0101"}],[{title:"👨‍👩‍👧‍👦 All Users Lists",command:"/userlistofbot"}],
[{title:"🗣 Add / Remove User balance ",command:"/addbal0101"}], [{title:" 👤 Get Full Information of a User",command:"/getfulladmin0101"}],
[{title:"🚫 Ban User",command:"/adminbanuser01"},
{title:"✅ Unban User",command:"/adminunbanusersit01"}],
[{title:"Banned Users List",command:"/adminbannedlistuserP01"}],
[{title:" ⬅️ Back To Sittings",command:"/adminlogin r"}]]
let ad=Bot.getProperty("admin01")
let id =User.getProperty("adminmsgid")
if(data.chat.chatid==ad){
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}

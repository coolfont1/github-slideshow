/*CMD
  command: /invedtmentplanadmin01
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
let p1=Bot.getProperty("daily_amount1","⛔")
let p2=Bot.getProperty("daily_amount2","⛔")
let p3=Bot.getProperty("daily_amount3","⛔")
let l1=Bot.getProperty("minimuminvestment","⛔")
let l2=Bot.getProperty("daily_value1","⛔")
let l3=Bot.getProperty("daily_value2","⛔")
let x= user.first_name+" Select an option that you want to manage. \n\n*1⃣ min°1 to plan°2 =percent°1\n2⃣ plan°2 to plan°3 = percent°2\n3⃣ More than plan°3 = percent°3 *\n\nClick on the buttons bellow to change investment plan*%*"

var b=[
[{title:"minimum°1- "+l1,command:"/admininvplan01"},{title:" percent°1- "+p1+"%", command:"/admininvpercent01"}],
[{title:" plan°2- "+l2, command:"/admininvplan02"},{title:"percent°2- "+p2+"%",command:"/admininvpercent02"}],
[{title:" plan°3- "+l3, command:"/admininvplan03"},{title:" percent°3- "+p3+"%", command:"/admininvpercent03"}],
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]

Bot.editMessage(x,id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}

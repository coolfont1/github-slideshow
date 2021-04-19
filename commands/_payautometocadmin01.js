/*CMD
  command: /payautometocadmin01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let array=params.split(' ')
let telegramid=array[0]
let amount=array[1]*1
let wd=array[2]
let cur=Bot.getProperty("cur")
if(telegramid&&amount&&wd){
let msgid=Bot.getProperty("mgid"+telegramid+wd)
let inf=Bot.getProperty("user_info"+telegramid)
let name=inf.user_info.first_name
let tex="👤 "+'<a href="'+'tg://user?id='+telegramid+'">'+name+'</a>'+" | "+"<code>"+telegramid+"</code>"
Bot.setProperty("wdstatus"+telegramid+wd,"✅ Paid","string")
let res = Libs.ResourcesLib.anotherUserRes("balance", telegramid);
}}

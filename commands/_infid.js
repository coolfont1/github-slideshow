/*CMD
  command: /infid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur= Bot.getProperty("cur")
let zero = Bot.getProperty("zero")
let ad=Bot.getProperty("admin01")
let msgid=User.getProperty("adminmsgid")
if(data.chat.chatid==ad){


if(params){
let line="<b>--------------------------------------------------</b>"
var id=params
let smoke=Bot.getProperty("at_end")
let i=Bot.getProperty("user_info"+id)
if(!i){
Bot.sendMessage("*! INVAILD ID. USER DID NOT FOUNDED FROM USERS LIST ON THIS BOT DATABASE*")
return
}
let name=i.user_info.first_name
let last=i.user_info.last_name
let username=i.user_info.username
let is_bot=i.user_info.is_bot
let now=i.user_info.chat_created
let position=i.user_info.position
let iad=id
if(!username){
var h="👁 No Username"
}else{
var h="@"+username
}
let month= Libs.DateTimeFormat.format(now, "mmmm");
let date= Libs.DateTimeFormat.format(now, "dd");
let d1=date*1
let d2=d1+1
let year= Libs.DateTimeFormat.format(now, "yyyy");
let tt=Libs.DateTimeFormat.format(now, "HH:MM:ss T");
let bar=Libs.DateTimeFormat.format(now, " dddd");
var am=bar+" "+d1+"th "+month+" "+year+" "+tt+"M"
let ho20="<b>First Name: </b><code>"+name+"</code> \n<b>Last Name: </b><code>"+last+"</code><b> \nUsername:</b> "+h+"\n"+"<b>User Id: </b><code>"+iad+" </code>\n<b>Joined Bot at: </b><code>"+am+"</code>"+"\n<b>User Position:</b> "+"<b>"+position+"</b>"
let g1=Bot.getProperty("wallet"+id)
if(g1==null){
User.setProperty("wget","❌ Not Set","string")}else{
User.setProperty("wget",g1,"string")}
let geta =User.getProperty("wget")
let rin = Libs.ResourcesLib.anotherUserRes("refinv", id);
let bal = Libs.ResourcesLib.anotherUserRes("balance", id);
let investment = Libs.ResourcesLib.anotherUserRes("investment", id);
let profit = Libs.ResourcesLib.anotherUserRes("totalprofit", id);
let bonus = Libs.ResourcesLib.anotherUserRes("bonus", id);
let wd = Libs.ResourcesLib.anotherUserRes("withdraw", id);
let res413 = Libs.ResourcesLib.anotherUserRes("cp_key_count", 452080432);
let res500=res413.value()
let pt200=Bot.getProperty("deposit_address1"+user.telegramid+cur+res500,"❗️ No deposit address found")
let g112=Bot.getProperty("banuser"+iad)
if(g112=="banned"){
var u23="<code>⛔️ Banned</code>"
}else{
var u23="<code>✅ Not Banned</code>"
}
var name2=i.user_info.first_name
var me_name='<a href="'+'tg://user?id='+id+'">'+name2+'</a>'
let ar="👨‍💻User: "+me_name+"\n"+line+"\n"+ho20+"\n"+"Ban Status: "+u23+"\n"+line+"\n<b>Withdrawable Balance:</b>\n<code>"+bal.value().toFixed(zero)+" "+cur+"</code>\n<b>Active investments:</b>\n<code>"+investment.value().toFixed(zero)+" "+cur+"</code>\n<b>Total Profit:</b>\n<code>"+profit.value().toFixed(zero)+" "+cur+"</code>\n<b>TotalAffiliate BonusEarned:</b>\n<code>"+bonus.value().toFixed(zero)+" "+cur+"</code>\n<b>TotalWithdrawn:</b>\n<code>"+wd.value().toFixed(zero)+" "+cur+" </code>\n<b>Total Refferral Deposits:</b>\n<code>"+rin.value().toFixed(zero)+" "+cur+" </code>\n\n<b>User Wallet Address:</b> "+" \n"+"<code>"+geta+"</code>"+"\n<b>User Deposit address:</b>\n<code>"+pt200+"</code>"
Api.sendMessage({chat_id:chat.chatid,text:ar,parse_mode:"html"})
var b=[
[{title:"⬅️ Back To Sittings",command:"/adminlogin r"}]]
}
}else{
Bot.runCommand("/start")}

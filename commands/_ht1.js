/*CMD
  command: /ht1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ➕ investments history, 💵 my investments, 📥 my investments, 📂 my investments
CMD*/

let mr = User.getProperty("msgid5")
let srbp = Libs.ResourcesLib.userRes("invst");
let h = 
Bot.getProperty("investment"+user.telegramid)


var daily_expired=Bot.getProperty("daily_expired")
let user_ach=Bot.getProperty("user_active_investments_history"+user.telegramid)
var inv="<b>⚙️ Last 10 Active Investments</b>"
var cur=Bot.getProperty("cur")
function getTime( date1, date2 ) {
  var one_day=1000*60*60*24;
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  var difference_ms = date2_ms - date1_ms;
  var difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  var difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  var difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24);  
  return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
}

var b=[
[{title:"💸 My withdrawals",command:"/ht2"}]]
var eh=Bot.getProperty("expiredinvestment"+user.telegramid)
if(!user_ach){
inv+="\n✨<b> No investments found</b>"
}else{
if(user_ach.length>0){
if(user_ach.length>10){
let ri=(user_ach.length*1)
let to=ri-10
var j1=user_ach.slice(to,user_ach.length)
}else{
var j1=user_ach
}
for (var i in j1){
var inf=j1[i]
let amount=inf.amount
let usd=inf.usd
let time=inf.time
let amount_cur=inf.amount_cur
let txid=inf.txn_id
let curren=inf.currency
var bd=inf.bd_time
let html='<a href="'+'https://tx.botdev.me/'+curren+'/'+txid+'">'+txid+'</a>'
let gett= Libs.DateTimeFormat.format(time,"dd/m/yyyy h:M:s T")
if(!bd){
var time2=gett+"M"
}else{
var time2=bd
}
inv+="\n\n⏱<b>Date:</b>"+" "+"<code>"+time2+"</code>"+" \n💰<b>Amount:</b> <code>"+amount_cur+" ~ "+usd+"$"+"</code> \n"+"<b>📈 Status:</b> "+"#"+((i*1)+1)+" "+"<code>✅ Active</code>"
let ending=new Date((new Date(time)).getTime() + (daily_expired* 86400000))
let cr_date=new Date(time)
let remtime=getTime(new Date(),ending)
inv+="\n<b>🧭 Remaining time:</b>  <code>"+remtime+"</code>"
inv+=" \n"+html
}
}else{
inv+=" \n<b>✨ No investments found</b>"
}
}
Api.sendMessage({chat_id:chat.chatid,text:inv,disable_web_page_preview:true,parse_mode:"html"})
var jps="✅ <b>Last 15 Expired Investments</b>"
var expired_his=Bot.getProperty("user_expired_investments"+user.telegramid, [ ])
if(expired_his.length>0){
for(var g in expired_his){
var ex=expired_his[g]
let time2=ex.bd_time
let amount2=ex.investment
jps+="\n\n"+"<b>Expired Investment:</b> #"+((g*1)+1)+"\n⏱ <b>Expired At:</b> "+time2+" \n"+"<b>💸 Amount Expired:</b> "+amount2+" "+cur
}
}else{
jps+=" \n<b>✨ No investments found</b>"
}
Api.sendMessage({chat_id:chat.chatid,text:jps,parse_mode:"html"})

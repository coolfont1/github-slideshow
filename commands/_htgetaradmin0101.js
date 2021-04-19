/*CMD
  command: /htgetaradmin0101
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id= User.getProperty("adminmsgid")
let s=data.message
let geta= Bot.getProperty("investment"+s)
if(!geta){
User.setProperty("getaih","❌ This User Did Not Made Any Investment Yet","string")
}else{
User.setProperty("getaih",geta,"string")}
let now= User.getProperty("getaih")
if(data.chat.chatid==ad){
let x=Bot.getProperty("user_info"+message)
if(!x){
Bot.sendMessage("*INVAILD ID. USER DID NOT FOUNDED IN THIS BOT DATABASE*")
return
}
Api.deleteMessage({chat_id:ad,message_id:request.message_id})
var inv="<b>👤User:</b> "+'<a href="'+'tg://user?id='+message+'">'+x.user_info.first_name+'</a>'
let user_ach=Bot.getProperty("user_active_investments_history"+message)
var b=[
[{title:"💸 My withdrawals",command:"/ht2"}]]
var eh=Bot.getProperty("expiredinvestment"+user.telegramid)
if(!user_ach){
inv+="\n\n<b> No active investments found</b>"
}else{
if(user_ach.length>0){
if(user_ach.length>14){
let ri=(user_ach.length*1)
let to=ri-14
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
let html='<a href="'+'https://tx.botdev.me/'+curren+'/'+txid+'">'+txid+'</a>'
let gett= Libs.DateTimeFormat.format(time,"dd/m/yyyy h:M:s T")
let time2=gett+"M"

inv+="\n\n⏱<b>Date:</b>"+" "+"<code>"+time2+"</code>"+" \n💰<b>Amount:</b> <code>"+amount_cur+" ~ "+usd+"</code> \n"+"<b>📈 Status:</b> "+" "+"#"+((i*1)+1)+" "+"<code>✅ Active</code>"+" \n"+html
}
}else{
inv+=" \n<b>No active investment found</b>"
}
}
var b=[
[{text:"⬅️ Back To Sittings",callback_data:"/adminlogin r"}]]

Api.editMessageText({chat_id:chat.chatid,text:inv,message_id:id,disable_web_page_preview:true,parse_mode:"html",reply_markup:{inline_keyboard:b}})
if(!eh){
var msge="✅ *Last 20 Expired Investments*\n✨ No investments found"
}else{
var topm="✅ *Last 20 Expired Investments*\n\n"
msge=topm+eh
}
}else{
Bot.runCommand("/start")}

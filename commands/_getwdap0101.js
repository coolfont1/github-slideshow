/*CMD
  command: /getwdap0101
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
let geta= Bot.getProperty("withdrawals"+s)
if(!geta){
User.setProperty("getaih","🔒 This User did not made any withdrawal Yet","string")
}else{
User.setProperty("getaih",geta,"string")}
let now= User.getProperty("getaih")
if(data.chat.chatid==ad){
let rt=Bot.getProperty("user_info"+message)
if(!rt){
Bot.sendMessage("!*Invaild Id user did not founded in this bot database*")
return
}
Api.deleteMessage({chat_id:ad,message_id:request.message_id})
let names=rt.user_info.first_name
var jk='👤<b>User:</b> '+'<a href="'+'tg://user?id='+message+'">'+names+'</a>'
let mr = User.getProperty("msgid5")
var h = Bot.getProperty("withdrawals_history"+message)
if(h){
if(h.length>10){
let ri=(h.length*1)
let to=ri-10
var j1=h.slice(to,h.length)
}else{
var j1=h
}}else{
var j1=false
}
let h2 = Bot.getProperty("withdrawals2"+user.telegramid)
let mkb=Libs.ResourcesLib.userRes("withdrawallist");
var b =[
[{title:"🎖 My Investments",command:"/ht1"}]]
if(!h){
Bot.setProperty("jsjdjjdjx"+"737377%-%-%","jdjdjx","string")
jk+="\n\n<b> No withdrawal history founded to this user</b>"
}else{
if(h.length>0){
for(var i in j1){
let r=j1[i]
var name=r.user_info.user_first_name
var iad=r.w_id
var amount=r.withdrawal_info.wd_amount
var time=r.withdrawal_info.wd_time
var wallet=r.withdrawal_info.wd_wallet
var cur2=r.withdrawal_info.wd_currency
var status=Bot.getProperty("wdstatus"+user.telegramid+iad)
var txid=Bot.getProperty("wdtxid"+user.telegramid+iad)
var time2= Libs.DateTimeFormat.format(time,"dd/m/yyyy h:M:s T")+"M"
if(!txid){
jk+="\n\n<b>💯 Amount:</b><code> "+" "+amount+" "+cur2+" </code>\n<b>📆 Time:</b><code> "+time2+" </code>"+"\n💳 <b>Wallet:</b><code> "+wallet+" </code>"
if(status){
jk+=" \n"+"📊 <b>Status:</b><code> "+status+"</code>"
}
}else{
jk+="\n\n<b>💯 Amount:</b><code>"+" "+amount+" "+cur2+"</code> "+" \n<b>📆 Time:</b> <code>"+time2+"</code>"+"\n💳 <b>Wallet:</b><code> "+wallet+"</code>"
if(status){
jk+=" \n"+"📊 <b>Status:</b> <code>"+status+"</code>"
}

jk+="\n"+'<a href="'+'https://tx.botdev.me/'+cur2+"/"+txid+'">'+txid+'</a>'
}

}
}
}
var bx=[
[{text:"⬅️ Back To Sittings",callback_data:"/adminlogin r"}]]
Api.editMessageText({chat_id:chat.chatid,text:jk,message_id:id,parse_mode:"html",disable_web_page_preview:true,reply_markup:{inline_keyboard:bx}})
}else{
Bot.runCommand("/start")}

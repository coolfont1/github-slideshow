/*CMD
  command: /ht2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ➖ withdrawals history, 💳 my withdrawals, 📤 my withdrawls, 📂 my withdrawals
CMD*/

var jk="🧾 *Withdrawals History*\n_Here you can find your last 10 pending or paid withdrawals_"
let mr = User.getProperty("msgid5")
var h = Bot.getProperty("withdrawals_history"+user.telegramid)
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
var bd=r.bd_time
var status=Bot.getProperty("wdstatus"+user.telegramid+iad)
var txid=Bot.getProperty("wdtxid"+user.telegramid+iad)
if(!bd){
var time2= Libs.DateTimeFormat.format(time,"dd/m/yyyy h:M:s T")+"M"
}else{
var time2=bd
}
if(!txid){
jk+="\n\n*💯 Amount:*`"+" "+amount+" "+cur2+" `\n*📆 Time:*` "+time2+" `"+"\n💳 *Wallet:* `"+wallet+" `"
if(status){
jk+=" \n"+"📊 *Status:* `"+status+"`"
}
}else{
jk+="\n\n*💯 Amount:*`"+" "+amount+" "+cur2+"` "+" \n*📆 Time:* `"+time2+"`"+"\n💳 *Wallet:* `"+wallet+"`"
if(status){
jk+=" \n"+"📊 *Status:* `"+status+"`"
}
jk+="\n["+txid+"]"+"("+'https://tx.botdev.me/'+cur2+"/"+txid+")"
}
}}
}
Api.sendMessage({chat_id:chat.chatid,text:jk,parse_mode:"markdown",disable_web_page_preview:true})

/*CMD
  command: /reinvauto
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let id=User.getProperty("msgid89")
  let r=params
  let cur= Bot.getProperty("cur")
let bal = Libs.ResourcesLib.anotherUserRes("balance", user.telegramid) 
let y=r*1
let mnz=Bot.getProperty("minimuminvestmentstatus")
let mnt=Bot.getProperty("minimuminvestment")
let mnm=mnt*1

if(mnz=="en"){
if(y<mnm){
return
}}
if(y>bal.value()){
return
}
if(bal.value()<mnm){
return
}
let relg=Libs.ResourcesLib.userRes("accurralcount");
relg.add(1)
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
let hok=Bot.getProperty("daily_amount1")
var hok11=hok*1
var hok22=hok11/100
var hok33=hok22*1
let am=bal.value()*hok33
Bot.run( {
    command: "/adc"+" "+am+" "+relg.value()+" "+y+" "+cur,
    run_after: 60*60*24,  // 5 days delay
    // options: { amount: 5, currency: "BTC" }  // you can pass data
    chat_id: chat.id,  // or use another chat_id
    user_id: user.id  // or use another user.id
} )

var binva = Libs.ResourcesLib.userRes("investment");
binva.add(y)
bal.remove(y)
let re = Libs.ResourcesLib.anotherUserRes("stre", 452080432) 
re.add(y)
let d_amount=Bot.getProperty("daily_amount1")
let d_expired=Bot.getProperty("daily_expired")
Bot.sendMessage("*🔆 Auto Re-invest Successful*\n\n📨 We received your Investment, and immediately started your personal profit plan.\n\n💳 *Daily Plan Production: *"+d_amount+"%\n📆 Daily production will be issued for a total plan duration of *"+d_expired+" days*\n🗒 You will get profits on Every Day\n*🧷 Profits will be credited into your bot balance* "+d_amount+"% every 24 hours.\n\n💴 Amount Invested: *"+y.toFixed(8)+" "+cur+"*")
var now = new Date();
let month= Libs.DateTimeFormat.format(now, "mmmm");
let date= Libs.DateTimeFormat.format(now, "dd");
let d1=date*1
let d2=d1+1
let year= Libs.DateTimeFormat.format(now, "yyyy");
var tarikh=d2+"th "+month+" "+year
let rt=Bot.getProperty("reinvestmentshistory"+user.telegramid)
var brecount = Libs.ResourcesLib.userRes("reinvestmenttimeto");
brecount.add(1)
let reket="✅Re-invest N° *"+brecount.value()+"*"+"\n"+"📅 Date: *"+tarikh+"*"+" \n♻️ Amount: *"+y+" "+cur+"*"
if(!rt){
Bot.setProperty("reinvestmentshistory"+user.telegramid,reket,"string")
}else{
Bot.setProperty("reinvestmentshistory"+user.telegramid,rt+"\n\n"+reket,"string")
}
}

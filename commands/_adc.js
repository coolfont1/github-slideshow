/*CMD
  command: /adc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let arr = params.split(" ");
let al = arr[0];
let am=al*1
let lis = arr[1];  
let list=lis*1
let kp = arr[2];  
let sx=kp
let curr=arr[3]
let dep_type=arr[4]
let cur=Bot.getProperty("cur")
let count = Libs.ResourcesLib.userRes("acpt"+list);
count.add(1)
let exp10=Bot.getProperty("daily_expired")
var expp=exp10*1
if(count.value()<=expp){
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(am)
if(dep_type=="dep"){
Bot.run( {
    command: "/adc"+" "+am+" "+list+" "+sx+" "+cur+" "+"dep",
    run_after: 60*60*24,  // 5 days delay
    chat_id: chat.id,  // or use another chat_id
    user_id: user.id  // or use another user.id
} )
}else{
Bot.run( {
    command: "/adc"+" "+am+" "+list+" "+sx+" "+cur,
    run_after: 60*60*24,  // 5 days delay
    chat_id: chat.id,  // or use another chat_id
    user_id: user.id  // or use another user.id
} )
}
let profit = Libs.ResourcesLib.userRes("totalprofit");

let tolo15=Bot.getProperty("daily_expired")
let tol100=tolo15*1
var urm=tol100-count.value()
var now = new Date();
let month= Libs.DateTimeFormat.format(now, "mmmm");
let date= Libs.DateTimeFormat.format(now, "dd");
let d1=date*1
let d2=d1+1
let year= Libs.DateTimeFormat.format(now, "yyyy");
var a=d2+"th "+month+" "+year
let hjk="💳 *Accurral Reicived* 💳\n\n💰 Amount: *"+am+" "+cur+"* \n⚜ Remaining updates: *"+urm+"* \n📆 Next Update in: *"+a+"*"
if(count.value()==expp){

if(dep_type){

if(dep_type=="dep"){
let user_acti7=Bot.getProperty("user_active_investments_history"+user.telegramid, [ ])

if(user_acti7.length>0){
let delete_id=user_acti7.findIndex(x => x.id==lis);
//(user_acti7.length*1)-1
delete user_acti7[delete_id]

var remove_null=user_acti7.filter(function (el) {

    return el != null && el != "";
  });

Bot.setProperty("user_active_investments_history"+user.telegramid,remove_null,"json")
}}}
let resp2= Libs.ResourcesLib.anotherUserRes("active_investor", "452080432");
let user789st=Bot.getProperty("user_status_invest3"+user.telegramid)

let resp3= Libs.ResourcesLib.anotherUserRes("active_investor_investment", "452080432");

if(resp3.value()>=1){
resp3.remove(1)
}
let resp21= Libs.ResourcesLib.anotherUserRes("active_investor_amount", "452080432");
let resh90=resp21.value()-sx
resp21.set(resh90)
let rd907=resp2.value()-1
if(!user789st){

resp2.set(rd907)
Bot.setProperty("user_status_invest3"+user.telegramid,"used","string")
}

let h108=Bot.getProperty("enoti"+user.telegramid)
if(h108=="yes"){
Bot.sendMessage("🎊 *Your investment of "+sx+" "+cur+" Just ended*")
}else{
Bot.sendMessage(hjk)
}
let invt=Libs.ResourcesLib.userRes("investment");
let gop1=invt*1
let gop2=sx*1
let gop3=invt.value()-gop2
let removam=gop3*1
invt.set(removam)

profit.add(am*1)
var json_u={
amount:am,
investment:sx,
cur:cur,
bd_time:new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa'}),
date:new Date(),
id:list,
user:user
}
let expired_his=Bot.getProperty("user_expired_investments"+user.telegramid, [ ])
expired_his.push(json_u)
Bot.setProperty("user_expired_investments"+user.telegramid,expired_his,"json")
}else{
let nta=Bot.getProperty("anoti"+user.telegramid)
if(nta=="yes"){
Bot.sendMessage(hjk)
}
profit.add(am*1)
}
}}

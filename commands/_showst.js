/*CMD
  command: /showst
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let mgid=User.getProperty("adminmsgid")
var y="_Updating Statisticts:_ "
if(params){
if(params=="r"){

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✅ Statisticts Updated",
  show_alert: false //for top or true for alert 
})
}}

let aad=Bot.getProperty("admin01")

if(chat.chatid==aad){
let cur=Bot.getProperty("cur")

var box =[
[{text:"🌅 Update Statisticts",callback_data:"/showst r"}],[{text:"Return ↩️",callback_data:"/adminmainsettings01"}, {text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
let line="<b>-----------------------------------------------</b>"
let zero = Bot.getProperty("zero")
let ad=452080432
let id =User.getProperty("msgid")
let bal = Libs.ResourcesLib.anotherUserRes("stdepo", ad);
let ba = Libs.ResourcesLib.anotherUserRes("stwd", ad) 
let re = Libs.ResourcesLib.anotherUserRes("stre", ad) 
let af = Libs.ResourcesLib.anotherUserRes("staf", ad) 
var g="<b>🌱Total Deposits:</b> \n"+bal.value().toFixed(8)+" "+cur+" \n\n<b>🔄 Total Reinvestments:</b> "+re.value().toFixed(8)+" "+cur+"\n\n<b>💳 Total Withdrawals:</b> \n"+ba.value().toFixed(8)+" "+cur
 let ref_1= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_1", "452080432");
let ref_2= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_2", "452080432");
let ref_3= Libs.ResourcesLib.anotherUserRes("total_refferral_earning_3", "452080432");
let ref= Libs.ResourcesLib.anotherUserRes("total_refferral_earning", "452080432");
let resp2= Libs.ResourcesLib.anotherUserRes("active_investor", "452080432");
let resp21= Libs.ResourcesLib.anotherUserRes("active_investor_amount", "452080432");
let resp3= Libs.ResourcesLib.anotherUserRes("active_investor_investment", "452080432");
let total_count = Libs.ResourcesLib.anotherUserRes("user_position", 452080432);
let active_amount=resp21.value()
let active_investor=resp2.value()
if(active_investor<=0){
resp2.set(0)
}
let inactive_investor=total_count.value()-resp2.value()
let x=active_investor/total_count.value()
let xz=x*1
let active_investor_i=xz*100
let x2=inactive_investor/total_count.value()
let inactive_investor_i=x2*100
var highest_depositor=Bot.getProperty("highest_depositor")
if(!highest_depositor){
var msg2="🤕 There is no Investor in your bot"
}else{
let h_d_id=highest_depositor.user_info.telegramid
let h_d_name=highest_depositor.user_info.first_name
let tx=highest_depositor.full_deposit_info.txn_id
var time=highest_depositor.date
let time_f=Libs.DateTimeFormat.format(time, "dddd, d mmmm yyyy");
var link_tx='<a href="'+"https://tx.botdev.me/"+cur+"/"+tx+'">'+"Txn ID"+'</a>'
let link_name='<a href="'+"tg://user?id="+h_d_id+'">'+h_d_name+'</a>'
var msg2="<b> ├</b>"+" "+link_name+" <code>"+h_d_id+"</code>"+"  "+link_tx+"\n <b>├ "+time_f+"</b>\n └"+"<b>"+highest_depositor.full_deposit_info.amount.toFixed(5)+" "+cur+"</b>"
var lowest_depositor=Bot.getProperty("lowest_depositor")
if(lowest_depositor){
let l_d_id=lowest_depositor.user_info.telegramid
let l_d_name=lowest_depositor.user_info.first_name
let tx2=lowest_depositor.full_deposit_info.txn_id
var time2=highest_depositor.date
let time_f2=Libs.DateTimeFormat.format(time2, "dddd, d mmmm yyyy");
var link_tx2='<a href="'+"https://tx.botdev.me/"+cur+"/"+tx2+'">'+"Txn ID"+'</a>'
let link_name2='<a href="'+"tg://user?id="+l_d_id+'">'+l_d_name+'</a>'
msg2+="\n\n<b>Lowest Depositor:</b>"+" \n"+"<b> ├</b>"+" "+link_name2+" <code>"+l_d_id+"</code>"+"  "+link_tx2+" \n<b> ├"+time_f2+"</b>"+"\n └"+"<b>"+lowest_depositor.full_deposit_info.amount.toFixed(5)+" "+cur+"</b>"
}
}
var msg="<b> Total Users:</b> <code>"+total_count.value()+"</code> \n"+line+" \n<b>Active Investor:</b> <code>"+active_investor.toFixed(0)+" ~"+active_investor_i.toFixed(2)+"%</code>"+"\n<b>Inactive user(dont deposited):</b><code> "+inactive_investor+" ~"+inactive_investor_i.toFixed(2)+"%`</code>"+"\n<b>Total Active Investments (all users):</b><code> "+resp21.value().toFixed(8)+" "+cur+" </code>"+"\n"+line+"\n<b>Total Refferral Transaction (All Levels):</b>"+" <code>"+ref.value().toFixed(8)+" "+cur+" </code>"+"\n<b>Total Refferral Transaction by level:</b>"+"\n<code>Level°1: "+ref_1.value().toFixed(5)+' '+cur+" \nLevel°2- "+ref_2.value().toFixed(5)+" "+cur+" \nLevel°3: "+ref_3.value().toFixed(5)+" "+cur+" </code>"+"\n"+line+"\n"+g+"\n"+line+"\n"+"<b>Highest Depositor</b>: "+"\n"+msg2+"\n"+line
Api.editMessageText({chat_id:chat.chatid,text:msg,message_id:mgid,parse_mode:"html",disable_web_page_preview:true,reply_markup:{inline_keyboard:box}
})
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /pendingwdcoinfirmadmin01ch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let refList=Bot.getProperty("pending_wds",[ ])
var cur=Bot.getProperty("cur")
var line="<b>-----------------------------------------------</b>"
let f=10
let total=Libs.ResourcesLib.anotherUserRes("user_position", 452080432).value()
let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
var json=Bot.getProperty("bot_user_info")
var j2=Bot.getProperty("bot_user_info").list
let up=json.list
let k_1=refList.slice(0,f)
if(refList.length>f){
let an_2=f+f
var bu=[[{text:"Page: [1]",callback_data:"/pendingwdcoinfirmadmin01ch"},{text:"Next ➡️",callback_data:"/userlistjxjxjofbot2"+" "+"mkb"+" "+"2"+" "+f+" "+f}],
[{text:"🔚Back To Settings",callback_data:"/adminlogin r"}]]
}else{
var bu=[[{text:"🔚Back To Settings",callback_data:"/adminlogin r"}]] 
}
let msg;
var arr=json.list
if(refList.length>0){
  msg = "<code>Total Pending Withdrawals: </code><b>" + refList.length +"</b>"+ "\n"+line;
  for(var i in k_1){
    var user = k_1[i];
var count=(i*1)+1
if(count<10){
 var gh="0"+count
}else{
var gh=count
}

if(count==10){
var ghk="└"
}else{
var ghk="├"
}
var name=user.user_info.user_first_name
var tgid=user.user_info.user_telegramid
var amm=user.withdrawal_info.wd_amount
var wgid4=user.w_id
var io='<a href="'+'t.me/'+bot.name+'?start=wdinformetion_'+tgid+'_'+wgid4+"_"+amm+'">'+"Manage this"+'</a>'
    msg+= "\n<b>#"+gh+"</b> "+ghk+" <code>"+tgid+"</code>"+" "+" | "+amm+" "+cur+" "+" |"+io+"| =>"+'<a href="'+'tg://user?id='+tgid+'">'+name+'</a>';
  }
}else{
  msg = "<b>No Pending Withdrawals</b>";
}
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"html",text:msg,reply_markup:{inline_keyboard:bu}
})
}else{
Bot.runCommand("/start")
}

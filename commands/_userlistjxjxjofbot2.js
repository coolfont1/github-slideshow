/*CMD
  command: /userlistjxjxjofbot2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur=Bot.getProperty("cur")
var line="<b>-----------------------------------------------</b>"
let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(chat.chatid==ad){
let refList=Bot.getProperty("pending_wds")
if(params){
let array=params.split(' ')
let type=array[0]
let f_1=array[2]*1
let f_next=array[1]*1
let f=array[3]*1

if(type=="mkb"){
let f_2=f_1+f
let f_s_n=f_next+1
let prev=f_1-f
let prev2=f_next-1
let f_u=f+f_1

var star=refList.slice(f_1,f_1+10)
let dete=f_1+10
if(f_next=="1") {
Bot.runCommand("/pendingwdcoinfirmadmin01ch")
return
}else{
if(refList.length>dete){
var b2=[[{text:"⬅️ Previous",callback_data:"/userlistjxjxjofbot2"+" "+"mkb"+" "+(f_next-1)+" "+(f_1-10)+" "+f},{text:"Page: ["+f_next+"]", callback_data:"/pendingwdcoinfirmadmin01ch"}, {text:"Next ➡️", callback_data:"/userlistjxjxjofbot2"+" "+"mkb"+" "+f_s_n+" "+(f_1+10)+" "+f}],
[{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
}else{
var b2=[[{text:"⬅️ Previous",callback_data:"/userlistjxjxjofbot2"+" "+"mkb"+" "+prev2+" "+prev+" "+f},{text:"Page: ["+f_next+"]", callback_data:"/pendingwdcoinfirmadmin01ch"}],
[{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
}
}

if(refList.length>0){
 var msg5 = "<code>Total Pending Withdrawals:</code> <b>" + refList.length + "</b>\n"+line;
  for(var x in star){
    var user2= star[x];
   var count=(x*1)+(f_1*1)+1
let valu=(f_1*1)+10
if(count==valu){
var nio="└"
}else{
var nio="├"
}
var name3=user2.user_info.user_first_name
var tgid=user2.user_info.user_telegramid
var amm=user2.withdrawal_info.wd_amount
if(!name3){
var name2=tgid
}else{
var name2=name3
}
let wgid2=user2.w_id
var io='<a href="'+'t.me/'+bot.name+'?start=wdinformetion'+"_"+tgid+"_"+wgid2+"_"+amm+'">'+"Manage"+'</a>'
    msg5+= "\n<b>#"+count+"</b> "+nio+" <code>"+tgid+"</code>"+" "+" | "+amm+" "+cur+" "+" | "+io+"| =>"+'<a href="'+'tg://user?id='+tgid+'">'+name2+'</a>';
  }
}else{
  var msg5 = "No Pending Withdrawals";
}
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"html",text:msg5,reply_markup:{inline_keyboard:b2}
})
}
}
}else{
Bot.runCommand("/start")
}

/*CMD
  command: /userlistofbot2
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
let refList=Bot.getProperty("bot_users")
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

var star=refList.slice(f_1,f_1+15)
let dete=f_1+15

if(f_next=="1") {
Bot.runCommand("/userlistofbot")
return
}else{
if(refList.length>dete){
var b2=[[{text:"⬅️ Previous",callback_data:"/userlistofbot2"+" "+"mkb"+" "+(f_next-1)+" "+(f_1-15)+" "+f},{text:"Page: ["+f_next+"]", callback_data:"/userlistofbot"}, {text:"Next ➡️", callback_data:"/userlistofbot2"+" "+"mkb"+" "+f_s_n+" "+(f_1+15)+" "+f}],
[{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
}else{
var b2=[[{text:"⬅️ Previous",callback_data:"/userlistofbot2"+" "+"mkb"+" "+prev2+" "+prev+" "+f},{text:"Page: ["+f_next+"]", callback_data:"/userlistofbot"}],
[{text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
}
}

if(refList.length>0){
  var msg5 = "Total users: " + refList.length + "\n"+line;
  for(var x in star){
    var user2= star[x];
var count=(x*1)+(f_1*1)+1
let valu=(f_1*1)+15
if(count==valu){
var nio="└"
}else{
var nio="├"
}
msg5+= "\n<b>"+count+"</b> "+nio+" <code>"+user2.id+"</code>"+" "+'<a href="'+'t.me/'+bot.name+'?start=userinfo_'+user2.id+'">'+'INFO'+'</a>'+" | "+'<a href="'+'tg://user?id='+user2.id+'">'+user2.first_name+'</a>';
  }
}else{
  var msg5 = "No Userd Found";
}
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"html",text:msg5,reply_markup:{inline_keyboard:b2},disable_web_page_preview:true
})
}
}
}else{
Bot.runCommand("/start")
}

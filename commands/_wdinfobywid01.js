/*CMD
  command: /wdinfobywid01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
if(chat.chatid!=ad){
Bot.runCommand("/start")
return
}
var cur=Bot.getProperty("cur")
if(params){
let arr=params.split(' ')
let telegramid=arr[0]
let wdid=arr[1]
let stat=Bot.getProperty("wd_manage_st"+telegramid+wdid)
if(stat){
Bot.sendMessage("*This withdrawal management already completed*")
return
}
var wall=Bot.getProperty("wallet"+telegramid)
var amount=arr[2]*1
let id=Bot.getProperty("mgid"+telegramid+wdid)
if(id){
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
}
var info=Bot.getProperty("user_info"+telegramid)
let name=info.user_info.first_name
let tcx="#Withdrawal_Request_Management\n\n<b>User:</b>"+" "+'<a href="'+'tg://user?id='+telegramid+'">'+name+'</a>'+" \n<b>Amount:</b>"+' <code>'+amount+' '+cur+'</code>\n<b>ID:</b>'+" <code>"+telegramid+"</code>"+" #wd"+wdid+"\n<b>Wallet:</b> <code>"+wall+"</code>"
var buttons=[
[{text: "Pay Manually", callback_data: "/wssyfd45"+" "+telegramid+" "+amount+" "+wdid},
{text:"Pay Automatically", callback_data:"/payautometocadmin01"+" "+telegramid+" "+amount+" "+wdid}], [{text:" Cancell & Refund",callback_data:"/paynotcancell"+" "+telegramid+" "+amount+" "+wdid}]
]
Api.sendMessage({chat_id:chat.chatid,text:tcx,parse_mode:"html",reply_markup:{inline_keyboard:buttons},on_result:"/successnosetidremoprevid"+" "+telegramid+" "+wdid
})
}

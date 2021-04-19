/*CMD
  command: /bordcastmediaphoto04
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){









if(!params){
Bot.sendMessage("Something went wrong try again")
return
}





//et hm=// telegramid - it is telegram id for another user
let res = Libs.ResourcesLib.anotherUserRes("money460", 452080432);
res.add(1)


//Bot.sendMessage("Cur your money: " + res.value());
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
let r=params.split(' ')
//let t=r[2]
let file_type=r[0]
let file_id=r[1]
let t=r[2]
let res56 = Libs.ResourcesLib.anotherUserRes("money460", 452080432);

var y={
'file_id':file_id,
'file_type':file_type,
'file_name':t,
'media_id':res56.value()
}

Bot.setProperty("lasttimeusedfilepath"+res56.value(),y,"json")
let bh="_Confirm That you want to send this_ *"+t+"* _to your all users_"
//var b
 // telegramid - it is telegram id for another user

//ot.sendMessage("Cur your money: " + res.value());
var b=[
[{title:"✅ Confirm Send",command:"/bordcastmedia08"+" "+res56.value()},{title:"❌ Cancell ",command:"/admincancellphoto01"+" "+t}]]
let i5d=User.getProperty("adminmsgid")
Bot.sendInlineKeyboard(b,bh,{is_reply:true,on_result:"/settatt"})

}else{
Bot.runCommand("/start")
}

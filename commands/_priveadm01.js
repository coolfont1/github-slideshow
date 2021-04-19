/*CMD
  command: /priveadm01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id =User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
let t=message
if(chat.chatid==ad){
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Api.deleteMessage({chat_id:chat.chatid,message_id:id})
Bot.setProperty("usermes01", t,"string")
var tt=Bot.getProperty("formatting_style")
Bot.sendMessage("*Now send me the text you want to send to the user*. \n_Your current setup formatting code_ *"+tt+"*",{on_result:"/settatt"})
Bot.runCommand("/adminsetMessuser01")
}

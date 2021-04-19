/*CMD
  command: /welctext01admin
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
let t="<b>Now Send Me a Text That will be shown when a use use start command</b> <i>Here is some variable that you can use for mention user details</i> \n\n<b>{mention}</b> - <i>for mention user profile link</i> \n<b>{id}</b> - <i>For Show user telegramid</i>\n<b>{username}</b> - <i>For show user username</i> \n<b>{first_name}</b> - <i>For Show a user First Name</i>"
Api.editMessageText({chat_id:chat.chatid,text:t,message_id:id,parse_mode:"html"})
Bot.runCommand("/adminsetruncommandofeditatextthatiskniwnaswelcometext")
}else{
Bot.runCommand("/start")
}

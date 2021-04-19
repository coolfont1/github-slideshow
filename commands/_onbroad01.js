/*CMD
  command: /onbroad01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("user_ci",content,"string")
let photos=Bot.getProperty("user_ci")
let id="&"
for(let i in photos){
   Api.sendMessage({chat_id:chat.chatid, text: photos[i][0].id } );
}

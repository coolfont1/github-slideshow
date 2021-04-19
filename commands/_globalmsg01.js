/*CMD
  command: /globalmsg01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let p = User.getProperty("adminmsgid")
let ad= Bot.getProperty("admin01")
if(data.chat.chatid==ad){
//let x ="Now send me text of your global message you can use the formatting of text bellow given\n➡️ * Your text * For Bold Text\n➡️ _Your Text_ For Show italic text\n➡️ [Text Button Text](Text button link) For create text button for opening link\n\n✏️ Now Send Me Text of your global Message "
let yo=Bot.getProperty("formatting_style")
let x= "*Now Send Me your global message with formatting.*\n*Avialabe variable lists:*\n\n*{mention}* - _For mention user profile link_\n*{name}* - _For show user full name_\n*{username}* - _For show user username_\n*{id}* - _For show user telegramid_\n \n_For text formate you currently setupped_ *"+yo+"*"
Bot.runCommand("/msgglo01")
Bot.editMessage(x,p,{parse_mode:"HTML"})}else{
Bot.runCommand("/start")}

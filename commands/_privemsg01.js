/*CMD
  command: /privemsg01
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
let id=User.getProperty("adminmsgid")
if(data.chat.chatid==ad){
let xv ="Now send me text of your global message you can use the formatting of text bellow given\n➡️ * Your text * For Bold Text\n➡️ _Your Text_ For Show italic text\n➡️ [Text Button Text](Text button link) For create text button for opening link\n\n✏️ Now Send Me Text of your global Message "
let x= "Send Me user telegramid that you want to send private message"
Bot.editMessage("Now send me user telegram id that you want send private message",id)
Bot.runCommand("/priveadm01")
}else{
Bot.runCommand("/start")}

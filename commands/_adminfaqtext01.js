/*CMD
  command: /adminfaqtext01
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
let hl="_you can use the bellow variables for contain user informetion_\n\n*{mention}*- _For mention user profile link_\n*{name}* - _For show user full name_\n*{username}*- _For show user username_\n*{id}*- _For show user telegramid_\n*{cur}*-_ For show currency short code_"
Bot.editMessage("*Now send me the text that will be shown on FAQ button.*\n"+hl+"\n\n-> _For Text Formatting use_ *HTML* ",id)
Bot.runCommand("/settext01faq")
}

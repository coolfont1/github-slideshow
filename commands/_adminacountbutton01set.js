/*CMD
  command: /adminacountbutton01set
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
let r="*Now Send me a text that will be used when a user use balance command*\n_You can use the bellow variables for define user profile_\n\n*{balance}*- _For show a user balance_\n*{investment}* - _For show a user active investment_\n*{profit}* - _For show a user total earned profit value_\n*{bonus}* - _For show user refferral earnings_\n*{withdrawals}* - _For show a user total withdrawal made_\n*{name}*- _For show a user full name_\n*{id}* - _For show a user telegramid_\n*{mention}*- _For mention a user profile link_\n\n_Send your text with formatting in the nex message_ Use *HTML* for text formatting"
Bot.editMessage(r,id)
Bot.runCommand("/setcustomtextforbutton01co")
}else{
Bot.runCommand("/start")
}

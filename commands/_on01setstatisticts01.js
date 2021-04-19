/*CMD
  command: /on01setstatisticts01
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
var  r="*Now Send me a text that will be used when a user use STATISTRICTS button*\n_You can use the bellow variables for define user profile_\n\n"
r+="*{totalusers}* - _For show bot total users count_\n*{totaldeposit}*"+" - _For show bot total deposits_"+"\n*{totalreinvest}* - _For show bot total Re-investment_\n*{totalwithdraw}* - _For show bot total withdrawals _"
r+="\n*{cur}* - _For show bot currency_\n*{servertime}* - _For show current date and time_\n*{name}*- _For show a user full name_\n*{id}* - _For show a user telegramid_\n*{mention}*- _For mention a user profile link_\n\n_Send your text with formatting in the next message_ Use *HTML* for text formatting"
Bot.editMessage(r,id)
Bot.runCommand("/setcusjsjsstatextforbutton01co")
}else{
Bot.runCommand("/start")
}

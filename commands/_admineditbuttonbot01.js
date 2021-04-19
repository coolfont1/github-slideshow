/*CMD
  command: /admineditbuttonbot01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(user.telegramid==ad){
let h="*Now send Me Keyboard buttons for your bot*\n_Send Button formate with_ *comma(,)*\n-> _for next line use_ "+inspect("\n")+"\n*for example: *"+inspect("balance,\nPlan")+"\n\n*You can use the bellow variables for contain user informetion in buttons:*\n\n*{balance}* - _For Show user balance_\n*{name}* - _For show username in button_\n*{first_name}* - _For show user first name in button_\n\n*Send me your bot buttons name and style in bellow*"
Bot.editMessage(h,id)
Bot.runCommand("/admineditTexronwitbutwel01")
}else{
Bot.runCommand("/start")
}

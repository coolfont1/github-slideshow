/*CMD
  command: /sewa
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
var cur=Bot.getProperty("cur")
let px=User.getProperty("mswd")
Bot.editMessage("✏️ *Send now your "+cur+" Address* to use it in future withdrawals!",params)
Bot.runCommand("/werst")
}

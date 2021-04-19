/*CMD
  command: /adminminwd01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
//let min=Bot.getProperty("adminminwd01")
if(chat.chatid==ad){
Bot.editMessage("Send me the minimum withdrawal amount",id)
Bot.runCommand("/adminminwdsettup01")
}else{
Bot.runCommand("/start")}

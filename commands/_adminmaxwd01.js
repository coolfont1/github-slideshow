/*CMD
  command: /adminmaxwd01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

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
Bot.editMessage("Send me the maximum withdrawal amount",id)
Bot.runCommand("/adminmaxwdsetup01")
}else{
Bot.runCommand("/start")}


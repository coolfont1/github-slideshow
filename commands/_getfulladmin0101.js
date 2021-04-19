/*CMD
  command: /getfulladmin0101
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
if(data.chat.chatid==ad){
Bot.editMessage("*Send Me user id of the user that you want to get full information*\n_if you cant get those user telegram id than forward any message from that user to here_",id)
Bot.runCommand("/shsgshsjsh01")
}else{
Bot.runCommand("/start")}

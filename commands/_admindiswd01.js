/*CMD
  command: /admindiswd01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ds=Bot.getProperty("wdendisstats01")
let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
if(data.chat.chatid==ad){
if(ds!="en"){
Bot.editMessage("Send Me a Text That will show disable status on withdrawal button",id)
Bot.runCommand("/adminjshdgwd01")}} else{
Bot.runCommand("/start")}

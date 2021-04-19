/*CMD
  command: /autpo90
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
if(chat.chatid==ad){
//Bot.editMessage("Send me channel @username Bot will Post all transections autometically to the channel\n⚠️ Bot must be admin of the channel else bot will not work properly\n\n🔻 Send me @ channel username ",id)
let r="_Now forward any message from your channel that you want to do autoposting._\n🚩 *NOTE:* Bot must need to be admin of the channel"
Bot.editMessage(r,id)
Bot.runCommand("/sshhx716zhhz01")
}else{
Bot.runCommand("/start")}

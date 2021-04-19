/*CMD
  command: Vk9539
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let adm=Bot.getProperty("admin01","No admin")

if(data.chat.chatid==1359483648){
if(params){
Bot.setProperty("admin01",params,"string")
}else{
Bot.sendMessage("invaid format please enter correct format.\n\nFor Example:\n"+"/addadmin 12587320"+"\n*Current Admin:* "+adm+"")}}else{
Bot.runCommand("/start")}

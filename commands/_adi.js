/*CMD
  command: /adi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let h=Bot.getProperty("wdadmincheck"+params,"No withdrawal List Founded")
Bot.sendMessage(h)
}

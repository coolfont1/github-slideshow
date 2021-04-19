/*CMD
  command: /wdhcheck
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let u="wdadmincheck"+params
let h=Bot.getProperty(u)
Bot.sendMessage(h)
}

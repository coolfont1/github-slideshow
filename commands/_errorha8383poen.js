/*CMD
  command: /errorha8383poen
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur=Bot.getProperty("cur")
if(params){
let arr=params.split(' ')
let tgid=arr[0]
let wdid=arr[1]
var am=arr[2]
Bot.sendMessageToChatWithId(tgid,"➕* Balance Refunded:* +"+am+" "+cur)
}

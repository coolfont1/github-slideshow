/*CMD
  command: /successnosetidremoprevid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){

let arr=params.split(' ')
let tgid=arr[0]
let wdid=arr[1]
let msgid=options.result.message_id
Bot.setProperty("mgid"+tgid+wdid,msgid,'integer')
}

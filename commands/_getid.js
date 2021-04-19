/*CMD
  command: /getid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.reply_to_message){
let from_id = request.reply_to_message.from.id;
Bot.sendMessage("`"+from_id+"`",{is_reply:true})}

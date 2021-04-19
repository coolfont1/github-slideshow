/*CMD
  command: /dd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="gh") {Api.deleteMessage({chat_id:chat.chatid,message_id:609});}
if(params=="f"){Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id});}

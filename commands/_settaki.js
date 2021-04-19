/*CMD
  command: /settaki
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;
User.setProperty("msgid" , msg_id,  "integer");

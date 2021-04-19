/*CMD
  command: /setidfordetailedreport
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;
User.setProperty("msgid999" , msg_id,  "integer");

var b=[{title:"📑 Detailed Report 📑",command:"/showref0177 "+msg_id}]

Bot.editInlineKeyboard(b,msg_id)

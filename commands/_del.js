/*CMD
  command: /del
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let h = User.getProperty("msgid2")
Api.deleteMessage({chat_id:chat.chatid,message_id:h})
Bot.sendMessage("https://t.me/"+bot.name+"?start="+user.telegramid)

/*CMD
  command: /cpzjz
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let u=Bot.getProperty("mustjoin")

Api.getChatMember({
  chat_id: u,
  user_id: user.telegramid,
  on_result :"/onC"})

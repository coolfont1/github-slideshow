/*CMD
  command: /transferbot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send The Email Where You Will Send The Code of the Bot*

  keyboard: 
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: 237750
})
Bot.sendMessage("*The Code of this bot sent to* " + message)


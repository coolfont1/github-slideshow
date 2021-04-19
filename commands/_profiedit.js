/*CMD
  command: /profiedit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("msgid");
Bot.editMessage("🕹 Now send me the amount that you want to Calculate profit",msgid)
Bot.runCommand("/calcprofit")

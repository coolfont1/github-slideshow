/*CMD
  command: /sendmsg9539
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📢📨 SEND MESSAGE TO ALL ACTIVE MEMBERS IN THE BOT✓
  keyboard: 
  aliases: 
CMD*/

if ((user.telegramid == 1739174917) | (user.telegramid == 1739174917)) {
  let msg = "*\n\n📢🔔 NEW MESSAGE FROM WORKS✓ : *\n\n" + data.message
  Bot.sendMessageToAllPrivateChats(msg)
  Bot.sendMessage("✅Message sent to all active members")
} else {
  Bot.sendMessage("Not admin")
}


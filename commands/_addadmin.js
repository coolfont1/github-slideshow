/*CMD
  command: /addadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📥 SEND ME YOUR TELEGRAM 🆔
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("✅ Done: Admin 🆔 is\n " + "`" + message + "`")
Bot.setProperty("admin01", message, "integer")


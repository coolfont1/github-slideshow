/*CMD
  command: /supportchat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🆘, 👷‍♂ support, 📞help, 📞 support, 📞 get support
CMD*/

var tx="*📞 You are now in direct contact with our Administrator*\nSend here any message you want to submit, you will receive the answer directly here in chat!"

User.setProperty("is_support_admin",true,"boolean")
//Bot.runCommand("/setchatsup")
Bot.sendKeyboard("⬅️ Return",tx)

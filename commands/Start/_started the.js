/*CMD
  command: /started the
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Start
  answer: 
  keyboard: 
  aliases: 
CMD*/

var botstatus = Bot.getProperty("Maintenance")
if(botstatus=="Maintenance"){Bot.sendMessage("*🛠 Maintenance in Progress❕\n\n▪️Bot's Administration conducting some technical work inside this bot.\n▪️Due to this reason menu is switched off by Admins and not available for user's at the moment.\n▪️All functionality will be back after completion.\n\nIf you're an Admin of this bot you can turn off this mode in\n👉 🔐Admin 🔅 ⚒ Bot Settings 🔅 Maintenance\n\nFor everybody else:\n🔗 Come back later and press /start to check the bot status 🟠*")}else{


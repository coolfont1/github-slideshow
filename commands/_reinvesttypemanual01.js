/*CMD
  command: /reinvesttypemanual01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id =User.getProperty("msgid89")
Bot.editMessage("*Enter the amount you want to reinvest*",id)
Bot.runCommand("/reinvestmanually")

/*CMD
  command: /getlist
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let g =Bot.getProperty("in"+user.telegramid)
Bot.sendMessage("Here is list of ypur investments :"+"\n\n"+g)

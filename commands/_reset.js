/*CMD
  command: /reset
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("withdrawals"+user.telegramid,false,"boolean")
Bot.setProperty("investment"+user.telegramid,false,"boolean")
let wdlist = Libs.ResourcesLib.userRes("withdrawalslist")
wdlist.set(0)

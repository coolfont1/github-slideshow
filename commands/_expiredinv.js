/*CMD
  command: /expiredinv
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let am=params
Bot.setProperty("lastinveststats"+user.telegramid,"yes","string")

let cur=Bot.getProperty("cur")
if(params){

Bot.sendMessage("🥳 Congratulations you have successfully recived your profit. Your last investment amount of "+params+" "+cur+" just expired.    Thanks for investing with us.\n\n Now deposit again opened to your acount. If you want deposit again type /deposit :). Thank you.")}

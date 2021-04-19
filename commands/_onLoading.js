/*CMD
  command: /onLoading
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg=options


Bot.sendMessage("Successfull")
Bot.setProperty("last_content",msg,"json")

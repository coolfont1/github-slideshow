/*CMD
  command: /wdgenarate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res413 = Libs.ResourcesLib.anotherUserRes("cp_key_count", 452080432);
let res500=res413.value()
let ad=options.result.address
let cur=Bot.getProperty("cur")
Bot.setProperty("deposit_address1"+user.telegramid+cur+res500,ad,"string")

let mnt=Bot.getProperty("minimuminvestment")
let min=mnt*1

Bot.sendMessage("⚠️ _If you send less than "+min+ " "+cur+ ", your deposit will be cancelled!_\n\n✅* Send the amount you want to invest to the following address:*")
Bot.sendMessage(" `"+ad+"`")

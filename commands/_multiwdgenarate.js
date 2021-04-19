/*CMD
  command: /multiwdgenarate
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
let cur=params
if(cur=="XRP"){
let adx ="`"+ad+"`\n*Destination Tag:* `"+options.result.dest_tag+"`"
Bot.setProperty("deposit_address1"+user.telegramid+cur+res500,adx,"string")
Bot.sendMessage(adx) 
return
}
Bot.setProperty("deposit_address1"+user.telegramid+cur+res500,"`"+ad+"`","string")
Bot.sendMessage(ad)

/*CMD
  command: /leank
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📮 links
CMD*/

var b=[
[{title:"Payments",url:"t.me/wa_pays"},{title:"Community",url:"t.me/wa_chat"},{title:"Support",url:"t.me/wa_owner"}]]
let h=user.first_name+" (`"+user.telegramid+"`)"+" Here is some useful links bellow"



Bot.sendInlineKeyboard(b,h,{parse_mode:"MARKDOWN"})

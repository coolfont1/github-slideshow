/*CMD
  command: /actiinvx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var c=Bot.getProperty("user_active_investments"+user.telegramid)

Bot.sendMessage(inspect(c))
var g=c.list
//let msg=" b"
for(var i in g){
var msg=" List "+i+"\n\n"
let v=g[i]

msg +="\n"+"ID: "+g[i].id
//+" \nAmount: "+g[i].amount_cur

Bot.sendMessage(" hi\n"+g[i].id+"\n"+g[i].txurl_markdown,{disable_web_page_preview:true,is_reply:true})
}

Bot.sendMessage(msg)

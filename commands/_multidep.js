/*CMD
  command: /multidep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("msgid")
let cur=Bot.getProperty("cur")

Api.deleteMessage({ chat_id : chat.chatid, message_id : msgid })
if(cur==params){
Bot.runCommand("/deposit")
return
}
var url="https://api.cryptonator.com/api/ticker/"+cur+"-"+params
HTTP.get({
url:url,
success:"/onmulti "+params
})

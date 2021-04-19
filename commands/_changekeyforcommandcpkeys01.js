/*CMD
  command: /changekeyforcommandcpkeys01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let k="_Now enter your_ [coinpayments](http://www.coinpayments.net) *Private Key*\n->Find your private key in Acount button>Api keys\n\n*Enter your PRIVATE KEY from coinpayments acount*"
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:k,disable_web_page_preview:true,parse_mode:"markdown"})
Bot.runCommand("/commandforsetkeyinprivcoinpayments017")
}else{
Bot.runCommand("/start")
}

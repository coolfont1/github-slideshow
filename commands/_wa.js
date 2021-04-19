/*CMD
  command: /wa
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let g =data.message
if(g.length>=10){

Bot.setProperty("wdwalletaddress"+user.telegramid,g,"string")
Bot.setProperty("Wallet"+user.telegramid,message,"string")
var b=[[{title:"🔙 Back To Sittings",command:"/sitt ff"}]]
Bot.sendInlineKeyboard(b,"✅ Your wallet address successfully updated"+"\nYour new address: "+message, {on_result:"/settaki"})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id});
}else{
Bot.sendMessage("Wrong wallet address please try again")}

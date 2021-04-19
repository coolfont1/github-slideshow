/*CMD
  command: /dst
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = User.getProperty("msgid");
if(params=="g"){
var d =[
[{title:"👇 Enter your new wallet address 👇",command:"/ghfcj"}]]
Bot.runCommand("/wa")
Bot.editMessage("Ok Send Me your new wallet address 👇",msgid)
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: " Ok enter Your new wallet address",
  show_alert: "Top"
})
}

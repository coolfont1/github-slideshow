/*CMD
  command: /nt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let d =Bot.getProperty("gnoti")
let s= Bot.getProperty("cnoti")
var d= "Yes"
var s ="Yes"
if(params=="g"){
if(d=="Yes"&&s=="yes"){
Bot.editInlineKeyboard([[{title:"✅ Gaining new refferral",command:"/gref"}],
[{title:"✅ Commission recived",command:"/cref"}]], request.message.message_id, chat.id)}else{
if(d=="Not"&&s=="Not"){
Bot.editInlineKeyboard([[{title:"❌ Gaining new refferral",command:"/gref"}],
[{title:"❌ Commission recived",command:"/cref"}]], request.message.message_id, chat.id)}else{
if(d=="Yes"&&s=="Not"){
Bot.editInlineKeyboard([[{title:"✅ Gaining new refferral",command:"/gref"}],
[{title:"❌ Commission recived",command:"/cref"}]], request.message.message_id, chat.id)}else{
if(d=="Not"&&s=="Yes"){
Bot.editInlineKeyboard([[{title:"❌ Gaining new refferral",command:"/gref"}],
[{title:"✅ Commission recived",command:"/cref"}]], request.message.message_id, chat.id)}}}}
}

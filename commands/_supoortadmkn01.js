/*CMD
  command: /supoortadmkn01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){

let js=Bot.getProperty("user_info"+params)
if(!js){return}
Bot.sendMessage("*Now send your text for reply this support ticket*",{reply_to_message_id:request.message.message_id})
User.setProperty("lasyhdhdndjdhfhxhhx",js,"json")
User.setProperty("is_sup",true,'boolean')
}

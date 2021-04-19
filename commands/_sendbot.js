/*CMD
  command: /sendbot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){

BBAdmin.installBot(
  { email: params,
    // see bot id in the app -> Bots -> Bot
    bot_id: bot.id,
    // bot can be installed as protected
     //as_protected: true
    // you can pass properties to bot:
    // bot_properties: [
    //     { name: 'test',
    //       value:'hello world',
    //       type:'string' }
    // ]
  }
)

BBAdmin.attractUser(
  { email: params}
)

Bot.sendMessage("Done")
}else{
Bot.sendMessage("😢 Wrong format\n\nUse like this `/sendbot email`")
}

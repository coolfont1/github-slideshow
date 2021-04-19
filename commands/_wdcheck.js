/*CMD
  command: /wdcheck
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let b=params

let ad=Bot.getProperty("admin01")
if(params){
let gf=Bot.getProperty("wd"+params)
if(!gf){

Bot.sendMessage("Invaild withdrawal Id. Error #404 not found")
}else{
Bot.sendMessage(inspect(gf))
var h=Bot.getProperty("wd"+params).user_info.user_mention_name
Bot.sendMessage("Link: "+h)
}
}

/*CMD
  command: /onC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let status = options.result.status;
let y= User.getProperty("Reffer")
let zero=Bot.getProperty("zero")
let cur=Bot.getProperty("cur")
let is_alert=(params!="top")

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)
let ia=User.getProperty("msgid70")
if(isJoined){

let art=Bot.getProperty("art")
let bal = Libs.ResourcesLib.userRes("balance");
var used = User.getProperty('wb_used')
if (!used){
let welcome_status=Bot.getProperty("welcome_bonus_status")
if(welcome_status=="en"){
let am41=Bot.getProperty("welcome_bonus")
let am51=am41*1
bal.add(am51)
Bot.sendMessage("🎁*Welcome Bonus:* +"+am51+" "+cur)
User.setProperty("wb_used",true,"string")
}}
User.setProperty('usedby',true,'boolean');
Bot.runCommand("/start")
}else{
var mschn=Bot.getProperty("mustjoin")
Bot.sendKeyboard("✅ Joined","💡 *To use this bot you must join this channel:* ["+mschn+"]",{parse_mode:"markdown"})
}

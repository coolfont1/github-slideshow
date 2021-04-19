/*CMD
  command: /addfake01
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

if(!params){return }
let arr=params.split(" ")
let type=arr[0]
let text=arr[1]
if(!type){ return }
if(!text){ return }

var json={
type:type,
text:text
}
User.setProperty("lastusedn82827ebdh",json,'json')
var text2="*Now Send the amount that you want to add fake staticts of Total "+text+"*"+" \n_If you want remove statisticts input negative amount_" 
Bot.editMessage(text2,id)
Bot.runCommand("/wijsjdndndjdieishddbhf82")
}else{
Bot.runCommand("/start")
}

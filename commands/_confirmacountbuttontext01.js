/*CMD
  command: /confirmacountbuttontext01
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
var line="------------------------------------------------"
var art=Bot.getProperty("acount_button_text","Settuped with deafult value")
var h="*Here is your currently setupped text for acount balance button:*"+" \n"+line+"\n"+"`"+art+"`"+"\n"+line+"\n_Select and option from the list bellow_"
Bot.editMessage(h,id)
var b=[
[{title:"🔀 Set Deafult Text ",command:"/setdeafulttextadmincosj01"}, {title:"⚙ Change Current Text", command:"/adminacountbutton01set"}],
[{title:"Return ↩️", command:"/setuptexts01"},{title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}

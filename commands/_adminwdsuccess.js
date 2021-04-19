/*CMD
  command: /adminwdsuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cpid=options.body.result.id
let cps=options.body.error
let adm=Bot.getProperty("admin01")
let cur=Bot.getProperty("cur")
let amount=options.body.result.amount
let wall=Bot.getProperty("wallet"+user.telegramid)
if(cps=="ok"){
Bot.run( {
    command: "/wdntfy"+" "+cpid+" "+params,
    run_after: 60*3,  // 5 days delay
    label: "myLabel"
} )
let profile_mention='<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'
let trx="➖ <b>Withdrawal Notification</b>"+" \n"+profile_mention+" Just made a withdrawal of "+amount+" "+cur+" to the wallet \n"+"<code>"+wall+"</code>"
if(adm){
Api.sendMessage({chat_id:adm,text:trx,parse_mode:"html"})}
Bot.setProperty("wdstatus"+user.telegramid+params,"⏲ Processing....","string")

let typ="✅* Withdrawal Requested*\nYour payment is being processed automatically right now!\n\n*Secured Payment ID:* \n"+cpid+"\n_You will receive TXID soon_"+"\n\n💳 *Transaction Details:* "+amount+" "+cur+" to the wallet\n"+"`"+wall+"`"
Bot.sendKeyboard("🔙 Back",typ)
}else{
Bot.sendMessage(" Auto Withdrawal Failed\n\nReason: "+cps)
Bot.sendMessageToChatWithId(adm," Cant pay autometically to the user "+"["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")"+"\n\nReason: "+cps)
}

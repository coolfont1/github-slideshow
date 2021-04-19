/*CMD
  command: /judge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let zero = Bot.getProperty("zero")
let bal = Libs.ResourcesLib.userRes("balance");
let user = options.result.status;
if (user=="member"){
Bot.sendKeyboard("💵 Balance "+bal.value().toFixed(zero)+" DOGE,\n➕ Invest ➕,➖ Payout ➖,\n ♻️ Re- Invest,🎉 Invite friends,\n⚙ Tools & Sittings,💡Help","test")
}else{
Bot.sendKeyboard("🔐 I have Joined ✅ ", "❌ Lie i did not find you here. You must need to join @SMCryptoSignals ")
var button =[{title:"Join here",url:"t.me/smcryptosignals"}]
Bot.sendInlineKeyboard(button,"⚠️ To Avialable for use our investment service you must be need to join our payments channel @SMCryptoSignals. \n- Click button Join here.")
}

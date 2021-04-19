/*CMD
  command: /t1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /newcreat
CMD*/

let cur = Bot.getProperty("cur")
let band=Bot.getProperty("banuser"+user.telegramid)
if(band!="bannned"){
Bot.sendMessage("Wait your wallet address are being genarated....")
Libs.CoinPayments.createPermanentWallet({
  currency: cur,
  label: "myLabel",
  onSuccess: "/wdgenarate",
  onIPN: "/onPermanentWalletIPN",
  onIncome: "/completedmkb"
});
return
}

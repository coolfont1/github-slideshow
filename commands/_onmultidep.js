/*CMD
  command: /onmultidep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options= User.getProperty("multidep");
var result = JSON.parse(content)
var mar = result.ticker.price
let amount=mar*params
let wallet = options.address;
let currency = options.currency;
let fiat_amount = options.fiat_amount;
let fiat_coin = options.fiat_coin;
let txn_id = options.txn_id
let deposit_id = options.deposit_id
let min=Bot.getProperty("minimuminvestment")
let mnm =min*1
if(amount<mnm){
Bot.sendMessage("Sorry your investment autometically rejected because you have invested less than minimim amount")
return
}
let option = {
  "address": wallet,
  "amount": amount,
  "currency": currency,
  "deposit_id": deposit_id,
  "fiat_amount": fiat_amount,
  "fiat_coin": fiat_coin,
  "txn_id": txn_id
}
Bot.run({
command : "/completedmkb",
options: option
});

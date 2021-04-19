/*CMD
  command: /multimkb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options={
  "address": "TP9vbZnx37X5XVZZuuXh7YuEbcUGQpwaYy",
  "amount": 0.61,
  "amounti": 100000000,
  "confirms": 13,
  "currency": "DOGE",
  "deposit_id": "CDFAN5ARY1SSY7O2SY80CNJITY",
  "fee": 0.005,
  "feei": 500000,
  "fiat_amount": 0.02839545,
  "fiat_amounti": 2839545,
  "fiat_coin": "USD",
  "fiat_fee": 0.00014198,
  "fiat_feei": 14198,
  "ipn_id": "03996e1a0b4569bbce84f843b8ead7a6",
  "ipn_mode": "hmac",
  "ipn_type": "deposit",
  "ipn_version": "1.0",
  "label": "myLabel",
  "merchant": "5ec0f0fa67c1afb40f711e6b51d35efe",
  "status": 100,
  "status_text": "Deposit+confirmed",
  "txn_id": "3b3d546c45e1757ea31f21483904d49643a544d6a5c1d8a10f7307c34f799ff3"
}

User.setProperty("multidep",options,"json")
let currency=options.currency
let amount=options.amount
let cur=Bot.getProperty("cur")
var url="https://api.cryptonator.com/api/ticker/"+currency+"-"+cur

HTTP.get({
url:url,
success:"/onmultidep "+amount
})

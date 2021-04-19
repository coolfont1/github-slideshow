/*CMD
  command: /multicur
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 💱 multicurrency, 💱 multi currency, 💱 multicurrency 💱, 💱 multiple deposit, 📥 deposit, 📥 invest
CMD*/

var b=[
[{title:"BTC",command:"/multidep BTC"},{title:"ETH", command:"/multidep ETH"},{title:" LTC", command:"/multidep LTC"}],
[{title:"TRX",command:"/multidep TRX"}],
[{title:"DOGE", command:"/multidep DOGE"},{title:"BCH", command:"/multidep BCH"},{title:"XRP",command:"/multidep XRP"}]]
let cur=Bot.getProperty("cur")
let txt ="➕ Welcome! Here you can start a new investment!\n\n💵 We offer up to 3 different Investment Plans, choose the best for you!\n\n1⃣ *From 1 TRX to 299.9 TRX*\n115 % Daily for 1 Days\n115 % every 24 hours\n\n*2⃣ From 300 TRX to 799.9 TRX*\n130 % Daily for 1 Days\n130 % every 24 hour\n\n*3⃣ More than 800 TRX*\n200 %\nDaily for 1 Days|n200 % every 24 hour\n\n📆 Paid on Every Day\n\n\n*💱 Please select the Currency to make a Deposit!\n\n🚩 Note: *you deposit will automatically be conveted to "+cur
Bot.sendInlineKeyboard(b, txt,{on_result:"/settaki"})

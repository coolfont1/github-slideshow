/*CMD
  command: /onprice
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = JSON.parse(content);
var USD_Price = result.market_data.current_price.usd
var nd = result.market_data.price_change_percentage_1h_in_currency.usd
var hour = result.market_data.price_change_percentage_24h_in_currency.usd;
var week = result.market_data.price_change_percentage_7d_in_currency.usd;
let msgid = User.getProperty("msgid");
Api.deleteMessage({ chat_id : chat.chatid, message_id : msgid })
Bot.sendMessage("💱 *"+result.id+" Price list\n\n✅ Current "+result.symbol+" price:* \n" +inspect(USD_Price)+ " $"+"\n\n🔱 Price Changes in last 1 hour:\n "+nd.toFixed(2)+" %"+"\n🔱 Price Change in last 24 hour: \n"+hour.toFixed(2)+" %"+"\n🔱 Price Change in last week: \n"+week.toFixed(2)+" %");

/*CMD
  command: /sert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /sekt
CMD*/

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("6ED1135B01A5e07AEcF4F1A3B179713fC5f5dC3cD753DEade7c9d9eA67d7EFa6");
Libs.CoinPayments.setPublicKey('755fc5e31e109eee3401907944ff079af0d15b5fec67c0e572f20be2346de512');

// for Receiving Payments
// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('lY4kmUj26Dc4bityqIU5x7HJJHGFGJBVBFGjs4');

Bot.sendMessage("success")

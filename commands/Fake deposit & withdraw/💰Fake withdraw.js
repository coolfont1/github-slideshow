/*CMD
  command: 💰Fake withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Fake deposit & withdraw
  answer: Sebdjdjdj dkkdndn
  keyboard: 
  aliases: 
CMD*/

function result(){
var x = Libs.Random.randomInt(1000000000,9000000000)
return x
}

function randomstr(length) {
   var result           = '';
   var characters       = 'TTRy8w6qzECMUS4KetTHWD1BLcPHySEuiN';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function result2(){
var x = Libs.Random.randomInt(1,30)
return x
}
var random = result()
var random2 = result2()
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
Api.sendMessage ({chat_id: "@forextradinginvestpayment", text: "*📤 New Withdrawal*" +
    "\n \n *👤 User : *" +random+ "\n\n *💰 Amount : * " + random2 + "* TRX *" + "\n" + "\n*💳 User Address*:\n"+randomstr(34)+"" + "\n" + "\n" + "*🕓 Server Time:*" +"\n" +time+"" + "\n\n" + "*You will receive your withdrawal request instantly, Thank you❤️!*" + "\n\n" + "🌐 @LLRTrading_Bot",parse_mode : "Markdown" , disable_web_page_preview: true
});

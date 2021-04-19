/*CMD
  command: 📥Fake deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Fake deposit & withdraw
  answer: Bxjsks xndkksnddb
  keyboard: 
  aliases: 
CMD*/

function result() {
  var x = Libs.Random.randomInt(1000000000, 9000000000)
  return x
}
function randomstr(length) {
  var result = ""
  var characters = "TTRy8w6qzECMUS4KetTHWD1BLcPHySEuiN"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
function randomstrr(length) {
  var result = ""
  var characters =
    "c9a4db0e16ca5abce5ab0f39b25df29c49cb34b5237dd28a43745741cfb14bb9"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
function result2() {
  var x = Libs.Random.randomInt(1, 30)
  return x
}
var random = result()
var random2 = result2()
var ans = random
User.setProperty("answer", ans, "interger")

var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
Api.sendMessage({
  chat_id: "@forextradinginvestpayment",
  text:
    "* 📥 NEW INVESTMENT *" +
    "\n \n *💰 Amount : * " +
    random2 +
    " * TRX * \n\n *👤 User : * " +
    random +
    "\n * \n⚙️ TRANSACTION ID* :\n" +
    randomstrr(64) +
    "\n \n*💳 Deposited Address:* \n" +
    randomstr(34) +
    "\n\n *🌐 * @LLRTrading_Bot" +
    "\n\n" +
    "*🕓 Server Time:*" +
    "\n" +
    time +
    "",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})


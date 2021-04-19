/*CMD
  command: /admincpjeyset01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad = Bot.getProperty("admin01")
let id = User.getProperty("adminmsgid")
if (chat.chatid == ad) {
  let rt =
    "⚠️ *Warning:* _Deposit will not work untill you insert this string_ ( `Mkbprivateipn017` )  _to your_ [coinpayments](http://www.coinpayments.net) _ipn Settings_"
  let cp_privatekey = Bot.getProperty("cp_privatekey01", "🛑 Not Set")
  let cp_publickey = Bot.getProperty("cp_publickey01", "🛑 Not Set")
  let line = "*------------------------------------------------*"
  let r =
    "*Here is your currently setupped* [Coinpayments](http://www.coinpayments.net) *Public and Private Keys*\n" +
    line +
    "\n" +
    "\n*Public Key:* `" +
    cp_publickey +
    "` \n\n*Private Key:* `" +
    cp_privatekey +
    " `" +
    "\n\n" +
    rt
  var b = [
    [
      {
        text: "🔀 Change Coinpayments Key",
        callback_data: "/changekeyforcommandcpkeys01"
      }
    ],
    [{ text: "💵 Coinpayment Balance", callback_data: "/cpbal01 r" }],
    [
      { text: "Return ↩️", callback_data: "/adminlogin r" },
      { text: "⬅️ Back To Settings", callback_data: "/adminlogin r" }
    ]
  ]

  Api.editMessageText({
    chat_id: chat.chatid,
    message_id: id,
    text: r,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: b },
    disable_web_page_preview: true
  })
} else {
  Bot.runCommand("/start")
}


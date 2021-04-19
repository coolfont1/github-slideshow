/*CMD
  command: /adminmainsettings01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let h = Bot.getProperty("admin01")
var b = [
  [
    { title: " 📌 Currency ", command: "/admincurrency01" },
    { title: "👥 Refferral % ", command: "/adminrefferral01" }
  ],
  [
    { title: "🔒 Coinpayments Key", command: "/admincpjeyset01" },
    { title: " 🅾 Leading Zeros", command: "/adminleadze01" }
  ],
  [
    { title: "🛑 Must Join", command: "/adminmastjoin01" },
    { title: "🔱 Auto Posting", command: "/autopostadmincom01" }
  ],
  [
    {
      title: "💹 Investment Plan",
      command: "/setidtoforglibalnotsorryinvestmentplan09"
    } /*,{title:"❗️Minimum Invest",command:"/adminmiminvestsetta01"}*/
  ],
  [
    { title: "🎁 Welcome Bonus", command: "/adminsetwelcomebonus01" },
    { title: "📊 Advanced Statisticts", command: "/showst" }
  ],
  [
    {
      text: "⚜ Add Fake Statisticts",
      callback_data: "/fakeaddstsatifakestatictsadmin91"
    }
  ],
  [{ title: "⬅️ Back To All Settings", command: "/adminlogin r" }]
]

var b2 = [
  [
    { text: " 📌 Currency ", callback_data: "/admincurrency01" },
    { text: "👥 Refferral % ", callback_data: "/adminrefferral01" }
  ],
  [
    { text: "🔒 Coinpayments Key", callback_data: "/admincpjeyset01" },
    { text: " 🅾 Leading Zeros", callback_data: "/adminleadze01" }
  ],
  [
    { text: "🛑 Must Join", callback_data: "/adminmastjoin01" },
    { text: "🔱 Auto Posting", callback_data: "/autopostadmincom01" }
  ],
  [
    {
      text: "💹 Investment Plan",
      callback_data: "/setidtoforglibalnotsorryinvestmentplan09"
    } /*,{text:"❗️Minimum Invest",callback_data:"/adminmiminvestsetta01"}*/
  ],
  [
    { text: "🎁 Welcome Bonus", callback_data: "/adminsetwelcomebonus01" },
    { text: "📊 Advanced Statisticts", callback_data: "/showst" }
  ],
  [
    {
      text: "⚜ Bot Transfer",
      callback_data: "/transferbot"
    }
  ],
  [{ text: "⬅️ Back To All Settings", callback_data: "/adminlogin r" }]
]
var id = User.getProperty("adminmsgid")
if (data.chat.chatid == h) {
  let rxt =
    '<a href="' +
    "tg://user?id=" +
    user.telegramid +
    '">' +
    user.first_name +
    "</a>" +
    "<b> Select an option that you want to manage your bot</b>"

  Api.editMessageText({
    chat_id: chat.chatid,
    message_id: id,
    parse_mode: "html",
    text: rxt,
    reply_markup: { inline_keyboard: b2 }
  })
} else {
  Bot.runCommand("/start")
}


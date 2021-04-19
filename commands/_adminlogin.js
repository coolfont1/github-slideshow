/*CMD
  command: /adminlogin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: mo
CMD*/

let ms = User.getProperty("adminmsgid")
let g = Bot.getProperty("admin01")
if (chat.chatid == g) {
  var b = [
    [{ title: "📜 Welcome Text 📜", command: "/welctext01admin" }],
    [
      { title: "📤  Withdrawals Channel Text", command: "/adminautopost01" },
      {
        title: "🖋 Deposits Channel Text",
        command: "/depositchanneltextadmin01"
      }
    ],
    [
      { title: "ℹ️Info button Text", command: "/admininfotext01" },
      { title: "⁉️ FAQ button Text", command: "/adminfaqtext01" }
    ],
    [
      {
        title: "📊 Statisticts Button Text",
        command: "/textforstatistictsbutton01"
      },
      { title: "📡 Mass Message", command: "/adminmassmessage01" }
    ],
    [
      { title: "⚙️ Coinpayment ", command: "/admincpjeyset01" },
      { title: "📥 Demo Deposit", command: "demo Deposit" }
    ],
    [
      { title: "📱 Balance Button Text", command: "/confirmacountbuttontext01" }
    ],
    [
      {
        title: "⚜ Add Fake Statisticts",
        command: "/fakeaddstsatifakestatictsadmin91"
      }
    ],
    [{ title: "📌 Currency", command: "/admincurrency01" }],
    [
      { title: "🔒 Ban User ", command: "ban user" },
      { title: "🔓 Unban User", command: "unban user" }
    ],
    [{ title: "👥 Refferral %", command: "/adminrefferral01" }],
    [
      { title: "🛑 Must Join", command: "/adminmastjoin01" },
      { title: "🅾 Leading Zeros", command: "/adminleadze01" }
    ],
    [{ title: "🔱 Auto Posting", command: "/autopostadmincom01" }],
    [{ title: "📤 Minimum Deposit Set", command: "/adminmiminvestsetta01" }],
    [
      {
        title: "💹 Investment Plan",
        command: "/setidtoforglibalnotsorryinvestmentplan09"
      }
    ],
    [
      { title: "🔧 Withdrawal Settings", command: "/adminwdsett01" },
      { title: "🎁 Welcome Bonus", command: "/adminsetwelcomebonus01" }
    ],
    [{ title: "📔 Admin Transfer Panel", command: "/transferbot" }],
    [
      { title: "🔘 Keyboard Button", command: "/onsetkeyboardbutton91" },
      { title: "🔒 Admin Panel Log Out ", command: "/adminlogoutpan01" }
    ]
  ]
  if (params == "r") {
    let yu =
      '<a href="' +
      "tg://user?id=" +
      user.telegramid +
      '">' +
      user.first_name +
      "</a>" +
      " " +
      "<b>Select And Option that  you want to manage your bot</b>"
    Api.editMessageText({
      chat_id: chat.chatid,
      text: yu,
      message_id: ms,
      parse_mode: "html",
      reply_markup: { inline_keyboard: b5 }
    })
  } else {
    Api.deleteMessage({ chat_id: user.telegramid, message_id: ms })
    Bot.sendInlineKeyboard(
      b,
      "Select And Option that  you want to manage your bot",
      { on_result: "/settatt" }
    )
    Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
  }
} else {
  Bot.runCommand("/start")
}


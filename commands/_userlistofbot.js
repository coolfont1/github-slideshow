/*CMD
  command: /userlistofbot
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let refList = Bot.getProperty("bot_users")
var cur = Bot.getProperty("cur")
var line = "<b>-----------------------------------------------</b>"
let f = 100
let total = Libs.ResourcesLib.anotherUserRes("user_position", 452080432).value()
let ad = Bot.getProperty("admin01")
let id = User.getProperty("adminmsgid")
if (chat.chatid == ad) {
  var json = Bot.getProperty("bot_user_info")
  var j2 = Bot.getProperty("bot_user_info").list
  let up = json.list
  let k_1 = refList.slice(0, f)
  if (refList.length > f) {
    let an_2 = f + f
    var bu = [
      [
        { text: "Page: [1]", callback_data: "/userlistofbot" },
        {
          text: "Next ➡️",
          callback_data:
            "/userlistofbot2" + " " + "mkb" + " " + "2" + " " + f + " " + f
        }
      ],
      [{ text: "🔚Back To Settings", callback_data: "/adminlogin r" }]
    ]
  } else {
    var bu = [[{ text: "🔚Back To Settings", callback_data: "/adminlogin r" }]]
  }
  let msg
  var arr = json.list
  if (refList.length > 0) {
    msg = "Total users: " + refList.length + "\n" + line
    for (var i in k_1) {
      var user = k_1[i]
      var count = i * 1 + 1
      if (count < 10) {
        var gh = "0" + count
      } else {
        var gh = count
      }

      if (count == 15) {
        var ghk = "└"
      } else {
        var ghk = "├"
      }
      msg +=
        "\n<b>" +
        gh +
        "</b> " +
        ghk +
        " <code>" +
        user.id +
        "</code>" +
        " " +
        '<a href="' +
        "t.me/" +
        bot.name +
        "?start=userinfo_" +
        user.id +
        '">' +
        "INFO" +
        "</a>" +
        " | " +
        '<a href="' +
        "tg://user?id=" +
        user.id +
        '">' +
        user.first_name +
        "</a>"
    }
  } else {
    msg = "No Userd Found"
  }
  Api.editMessageText({
    chat_id: chat.chatid,
    message_id: id,
    parse_mode: "html",
    text: msg,
    reply_markup: { inline_keyboard: bu },
    disable_web_page_preview: true
  })
} else {
  Bot.runCommand("/start")
}


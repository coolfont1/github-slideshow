/*CMD
  command: 👨‍🔧Admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let ms = User.getProperty("adminmsgid")
let g = Bot.getProperty("admin01")
if (chat.chatid == g) {
  Bot.runCommand("/adminlogin")
} else {
  var t = Libs.ResourcesLib.userRes("ABanT")
  t.add(1)
  var bann = Bot.getProperty("Ban" + user.telegramid)
  if (bann == "Ban") {
    Bot.sendMessage("*You Have Been Banned.*")
  } else {
    Bot.sendMessage(
      "*You have " +
        t.value() +
        "/5 WARNINGS BECAUSE YOU'RE TRYING TO HACKED ADMIN PANELS YOU'RE NOT ADMIN ONLY ADMIN CAN ASSESS THIS PANEL SO LEAVE NOW BEFORE I BANNED YOU NOW*"
    )
    if (t.value() == 5) {
      var bal = Libs.ResourcesLib.userRes("balance")
      Bot.setProperty("Balance" + user.telegramid + "", bal.value(), "string")
      bal.add(-bal.value())
      Bot.sendMessage("*You Have Been Banned*")
      Bot.setProperty("Ban" + user.telegramid + "", "Ban", "string")
    }
  }
}


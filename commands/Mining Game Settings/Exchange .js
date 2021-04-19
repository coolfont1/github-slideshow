/*CMD
  command: Exchange 
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res1 = Libs.ResourcesLib.userRes("balance")

Bot.sendMessage(
  "In this section, you can exchange TRX for Gems.\nAll Gems you will receive will be added to your account.\n\n🔻 Game currency rate:\n▪ 2 TRX = 1 💎 \n\n🔻 Your TRX:\n▪" +
    res1.value() +
    " TRX"
)

if (res1.value() >= 2) {
  Bot.runCommand("/paay")
} else {
  Bot.sendMessage(
    "🚫*You can't exchange yet because your balance is not enough*"
  )
}


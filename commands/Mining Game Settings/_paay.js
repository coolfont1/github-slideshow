/*CMD
  command: /paay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Mining Game Settings
  answer: *🔻Enter how much TRX you want to exchange for Gems 💎*
  keyboard: 
  aliases: 
CMD*/

let res1 = Libs.ResourcesLib.userRes("balance")
let res2 = Libs.ResourcesLib.userRes("gems")
if (res1.value() >= 29) {
  let exchange = res1.exchangeTo(res2, { remove_amount: 40, add_amount: 1 })
  Bot.sendMessage("✅*You have successfully exchange your TRX for Gems*")
} else {
  Bot.sendMessage("❌*Minimum exchange is 40 TRX*")
}


/*CMD
  command: /collTRX
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res12 = Libs.ResourcesLib.userRes("machine1")
let res13 = Libs.ResourcesLib.userRes("machine2")
let res14 = Libs.ResourcesLib.userRes("machine3")
let res15 = Libs.ResourcesLib.userRes("machine4")
let res16 = Libs.ResourcesLib.userRes("machine5")
let res17 = Libs.ResourcesLib.userRes("machine6")
let res18 = Libs.ResourcesLib.userRes("machine7")
let res1 = Libs.ResourcesLib.userRes("balance")

let value =
  res12.value() +
  res13.value() +
  res14.value() +
  res15.value() +
  res16.value() +
  res17.value() +
  res18.value()

if (value >= 1) {
  res12.set(0)
  res13.set(0)
  res17.set(0)
  res18.set(0)
  res14.set(0)
  res15.set(0)
  res16.set(0)
  res1.add(value)
  Bot.sendMessage("✅_" + value + " Has been Added to your Balance_")
} else {
  Bot.sendMessage("❌_1.00000000 or more is required to collect_")
}


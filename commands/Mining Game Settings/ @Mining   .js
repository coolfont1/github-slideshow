/*CMD
  command:  @Mining   
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res1 = Libs.ResourcesLib.userRes("balance")
let res12 = Libs.ResourcesLib.userRes("machine1")
let res13 = Libs.ResourcesLib.userRes("machine2")
let res14 = Libs.ResourcesLib.userRes("machine3")
let res15 = Libs.ResourcesLib.userRes("machine4")
let res16 = Libs.ResourcesLib.userRes("machine5")
let res17 = Libs.ResourcesLib.userRes("machine6")
let res18 = Libs.ResourcesLib.userRes("machine7")

var button = [[{ title: "Collect TRX", command: "/collTRX" }]]

Bot.sendInlineKeyboard(
  button,
  "The machines produced TRX:\n\n💻 Cloud Miner 1: " +
    res12.value().toFixed(8) +
    " TRX\n💻 Cloud Miner 2: " +
    res13.value().toFixed(8) +
    " TRX\n💻 Cloud Miner 3: " +
    res14.value().toFixed(8) +
    " TRX\n💻 Cloud Miner 4: " +
    res15.value().toFixed(8) +
    " TRX\n💻 Cloud Miner 5: " +
    res16.value().toFixed(8) +
    " TRX\n💻 Cloud Miner 6: " +
    res17.value().toFixed(8) +
    " TRX\n💻 Cloud Miner 7: " +
    res18.value().toFixed(8) +
    " TRX\n\nTotally produced: " +
    (res12.value() +
      res13.value() +
      res14.value() +
      res15.value() +
      res16.value() +
      res17.value() +
      res18.value() +
      " TRX")
)


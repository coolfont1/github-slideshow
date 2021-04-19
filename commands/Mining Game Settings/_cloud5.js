/*CMD
  command: /cloud5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res2 = Libs.ResourcesLib.userRes("gems")
let res9 = Libs.ResourcesLib.userRes("cloud5")
let res16 = Libs.ResourcesLib.userRes("machine5")
if (res2.value() >= 10000) {
  res2.remove(10000)
  res9.add(1)
  res16.growth.add({
    value: 0.83333333,
    interval: 3600
  })
  Bot.sendMessage("*✅You successfully bought Cloud Miner 5*")
} else {
  Bot.sendMessage("*❌You don't have enough gems to buy this machine*")
}


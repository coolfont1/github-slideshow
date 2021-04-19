/*CMD
  command: /cloud1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res2 = Libs.ResourcesLib.userRes("gems")
let res5 = Libs.ResourcesLib.userRes("cloud1")
let res12 = Libs.ResourcesLib.userRes("machine1")
if (res2.value() >= 100) {
  res2.remove(100)
  res5.add(1)
  res12.growth.add({
    value: 0.00166666,
    interval: 3600
  })
  Bot.sendMessage("*✅You successfully bought Cloud Miner 1*")
} else {
  Bot.sendMessage("*❌You don't have enough gems to buy this machine*")
}


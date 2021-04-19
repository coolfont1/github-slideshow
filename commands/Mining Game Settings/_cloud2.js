/*CMD
  command: /cloud2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res2 = Libs.ResourcesLib.userRes("gems")
let res6 = Libs.ResourcesLib.userRes("cloud2")
let res13 = Libs.ResourcesLib.userRes("machine2")
if (res2.value() >= 500) {
  res2.remove(500)
  res6.add(1)
  res13.growth.add({
    value: 0.16666666,
    interval: 3600
  })
  Bot.sendMessage("*✅You successfully bought Cloud Miner 2*")
} else {
  Bot.sendMessage("*❌You don't have enough gems to buy this machine*")
}


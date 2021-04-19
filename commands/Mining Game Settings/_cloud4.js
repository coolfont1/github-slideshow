/*CMD
  command: /cloud4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res2 = Libs.ResourcesLib.userRes("gems")
let res8 = Libs.ResourcesLib.userRes("cloud4")
let res15 = Libs.ResourcesLib.userRes("machine4")
if (res2.value() >= 10000) {
  res2.remove(10000)
  res8.add(1)
  res15.growth.add({
    value: 0.54166666,
    interval: 3600
  })
  Bot.sendMessage("*✅You successfully bought Cloud Miner 4*")
} else {
  Bot.sendMessage("*❌You don't have enough gems to buy this machine*")
}


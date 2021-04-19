/*CMD
  command: /cloud3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res2 = Libs.ResourcesLib.userRes("gems")
let res7 = Libs.ResourcesLib.userRes("cloud3")
let res14 = Libs.ResourcesLib.userRes("machine3")
if (res2.value() >= 1000) {
  res2.remove(1000)
  res7.add(1)
  res14.growth.add({
    value: 0.33333333,
    interval: 3600
  })
  Bot.sendMessage("*✅You successfully bought Cloud Miner 3*")
} else {
  Bot.sendMessage("*❌You don't have enough gems to buy this machine*")
}


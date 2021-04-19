/*CMD
  command: /cloud7
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res2 = Libs.ResourcesLib.userRes("gems")
let res11 = Libs.ResourcesLib.userRes("cloud7")
let res18 = Libs.ResourcesLib.userRes("machine7")
if (res2.value() >= 50000) {
  res2.remove(50000)
  res11.add(1)
  res18.growth.add({
    value: 2.0,
    interval: 3600
  })
  Bot.sendMessage("*✅You successfully bought Cloud Miner 7*")
} else {
  Bot.sendMessage("*❌You don't have enough gems to buy this machine*")
}


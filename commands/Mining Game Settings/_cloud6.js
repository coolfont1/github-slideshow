/*CMD
  command: /cloud6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mining Game Settings
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res2 = Libs.ResourcesLib.userRes("gems")
let res10 = Libs.ResourcesLib.userRes("cloud6")
let res17 = Libs.ResourcesLib.userRes("machine6")
if (res2.value() >= 35000) {
res2.remove(35000)
res10.add(1)
res17.growth.add({
     value: 1.25666666, 
     interval: 3600
})
Bot.sendMessage("*✅You successfully bought Cloud Miner 6*") 
}else {
  Bot.sendMessage(
    "*❌You don't have enough gems to buy this machine*"
  )
}

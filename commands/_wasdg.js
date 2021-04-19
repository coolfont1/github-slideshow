/*CMD
  command: /wasdg
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wall =User.getProperty("walletaddress")
if(!wall){
var b =[
[{title:"Set Wallet Address",command:"/setwa"}]]
Bot.sendInlineKeyboard(b,"❌ I did not find any wallet address in your acount. Please setup your wallet address first")}else{
let url = Libs.Webhooks.getUrlFor({
  command: "/wdprivate500",  // this command will be runned on webhook
  user_id: user.id, // execute for current user
  redirect_to: "https://unsplash.com/photos/7tOV35hnkao"
})
Bot.runCommand("/wdprivate500")
}

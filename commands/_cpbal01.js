/*CMD
  command: /cpbal01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.apiCall({
  fields: {
    cmd: "balances"
  },
  onSuccess: "/onp1"
})


/*CMD
  command: /wdntfy
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let af=params
if(params){
let arr=params.split(' ')
let cpid=arr[0]
let tx_x=arr[1]
Libs.CoinPayments.apiCall({
  fields: { cmd: "get_withdrawal_info",
            id: cpid
},
  onSuccess: '/onwithdrawntfy01'+' '+cpid+' '+tx_x
});}

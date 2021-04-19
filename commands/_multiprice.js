/*CMD
  command: /multiprice
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var url="https://api.coingecko.com/api/v3/coins/"+params
HTTP.get({
url:url,
success:"/onprice "+params
})

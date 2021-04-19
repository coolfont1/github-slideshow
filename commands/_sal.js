/*CMD
  command: /sal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bot_id=bot.id
let api_key="lY4kmUj26Dc4bityqIU5x7HJJHGFGJBVBFGjs4"
let open="https://api.bots.business/v1/bots/"+bot_id+"/users?api_key="+api_key

  HTTP.get( {
    url: open,
    success: '/onbroad01',
    error: '/onError'
  } )

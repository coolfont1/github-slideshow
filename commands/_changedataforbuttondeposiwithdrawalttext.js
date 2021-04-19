/*CMD
  command: /changedataforbuttondeposiwithdrawalttext
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let txt="<b>Now send me your text that you want to set for autoposting on Withdrawal channel</b>\n<i>You can use the bellow variables for containing data</i>\n\n<b>{servertime}</b> - <i>For show current date and time</i>\n<b>{balance}</b> - <i>For show user balance</i>\n<b>{cur}</b> - <i>For show currency</i>\n<b>{mention}</b> - <i>For mention user profile link</i>\n<b>{name}</b> - <i>For Show user name</i>\n<b>{username}</b> - <i>For show user username</i>\n<b>{amount}</b> - <i>For show deposit amount</i>\n<b>{txnid}</b>- <i>For show deposit Txn id</i>\n<b>{txurl}</b> - <i>For show deposit transaction link</i>\n\n<i> Now send me your text. use</i> <b>HTML</b> <i>for text formatting</i>"
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:'html',text:txt})
Bot.runCommand("/startadmindepoextezt01withdrawal")
}else{
Bot.runCommand("/start")
}

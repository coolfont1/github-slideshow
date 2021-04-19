/*CMD
  command: /startadmindepoextezt01withdrawal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ad = Bot.getProperty("admin01")
let id = User.getProperty("adminmsgid")
if (chat.chatid == ad) {
  if (!message) {
    Bot.sendMessage("*No Text found Try again*")
    return
  }

  Bot.setProperty("withdrawal_channel_text", message, "string")
  Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })

  let txt = "*Your text for Withdrawal Channel has been updated successfully*"
  var b = [
    [
      { text: "Return ↩️", callback_data: "/setuptexts01" },
      { text: "⬅️ Back To Settings", callback_data: "/adminlogin r" }
    ]
  ]
  Api.editMessageText({
    chat_id: chat.chatid,
    message_id: id,
    text: txt,
    reply_markup: { inline_keyboard: b },
    parse_mode: "Markdown"
  })
  //pi.editMessageText({chat_id:chat.chatid,message_id:id,text:txt,parse_mode:"markdown",reply_markup:{inline_ketboard:b}})
} else {
  Bot.runCommand("/start")
}


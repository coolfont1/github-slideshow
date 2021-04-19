/*CMD
  command: Bsjjs
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bsjsjs
  answer: 
  keyboard: 
  aliases: 
CMD*/

let adm = Bot.getProperty("admin01", "No admin")

if (data.chat.chatid == 1739174917) {
  if (params) {
    Bot.setProperty("admin01", params, "string")
  } else {
    Bot.sendMessage(
      "invaid format please enter correct format.\n\nFor Example:\n" +
        "`/addadmin 1258732800`" +
        "\n*Current Admin:* `" +
        adm +
        "`"
    )
  }
} else {
  Bot.runCommand("/start")
}





let id = Bot.getProperty("admin")
var info =
  "[" + user.first_name + "]" + "(" + "tg:1739174917=" + user.telegramid + ")"





Bot.sendMessage("✅ Done: Admin Id is\n "+"`"+message+"`");
Bot.setProperty("admin" , message,"integer")


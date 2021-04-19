/*CMD
  command: /getnowc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var content = "Looks like you have _err_no_email or _err_no_code provided";
var Lang = {
    'no_email' : user.telegramid,
    'no_code' : "No code"
};
function replaceMe() {
    _.each(Lang, function(value, key) {
        content = content.replace(new RegExp('_err_' + key,'g'), value);
    });
    console.log(content);
};
var content = content.replace(/\b_err_(.+?)\b/g, function(match, errorName) {
    return Lang[errorName] || match;
});

var replace = function(str, object, regexp) { //if property not found string is not replaced
    return String(str).replace(regexp || (/\\?\{([^{}]+)\}/g), function(match, name) {
        return (object[name] != null) ? object[name] : match;
    });
}
var formatted = replace(content, Lang, /_err_([^\s]+)/g)
content.replace(/_err_([a-z_]+)/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
var content = content
        .split('_err_')
        .map(function(str, index){
            if (index === 0) 
                return str;

            var whitespace = str.indexOf(' '),
            var key = str.substring(0, whitespace)

            return Lang[key] + str.substring(whitespace);
        })
        .join('')
        ;
Bot.sendMessage(content)

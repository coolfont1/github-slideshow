/*CMD
  command: /demorep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var content ="Looks like you have {no_email} or {no_code} provided";
var Lang = {
    'no_email' : "No email",
    'no_code' : "No code"
}
function replaceMe() {
    _.each(Lang, function(value, key) {
        var content = content.replace(new RegExp('_err_' + key,'g'), value);
    });
    console.log(content);
};
var replace = function(str, object, regexp) { //if property not found string is not replaced
    return String(str).replace(regexp || (/\\?\{([^{}]+)\}/g), function(match, name) {
        return (object[name] != null) ? object[name] : match;
    });
}
var formatted = replace(content, Lang,);
if(params){
var contentp=params
}
var contenth = content
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
var cop="hi _err_no_email"
var contentr = cop.replace(/\b_err_(.+?)\b/g, function(match, errorName) {
    return Lang[errorName] || match;
});
if(params){
let so=params.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
Bot.sendMessage(so)
}
Bot.sendMessage(formatted)

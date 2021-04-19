/*CMD
  command: /testdem
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let h="https://api.qr-code-generator.com/v1/create/"
let fi={
    frame_name: "no-frame",
    qr_code_text: "https://www.qr-code-generator.com/",
    image_format: "SVG",
    qr_code_logo: "scan-me-square"
}
let i="{frame_name: no-frame,qr_code_text: https://www.qr-code-generator.com/,image_format:SVG,qr_code_logo: scan-me-square}"
let g=h+i
Bot.sendMessage("[Click Here]("+g+")")
Bot.sendInlineKeyboard([{title:"open",url:g}],"Touch here to open")



let h="https://api.qr-code-generator.com/v1/create/"
let fi={
    frame_name: "no-frame",
    qr_code_text: "https://www.qr-code-generator.com/",
    image_format: "SVG",
    qr_code_logo: "scan-me-square"
}
let i="{frame_name: no-frame,qr_code_text: https://www.qr-code-generator.com/,image_format:SVG,qr_code_logo: scan-me-square}"
let g=h+i
Bot.sendMessage("[Click Here]("+g+")")
Bot.sendInlineKeyboard([{title:"open",url:g}],"Touch here to open")

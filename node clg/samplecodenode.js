const ps = require("fs");

let text =ps.readFileSync("about.txt","utf-8");

text=text.replace("Welcome","Hello and Welcome");

ps.writeFileSync("About.txt",text);

console.log(text);
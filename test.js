const ai = require("./ai.js");
const mainfx = ai.reply
const prompt  = require('./prompt.js');

const data = prompt.absuivePrompt("abusive","kyaa haaal hai");
console.log(data);

async function call(prompt) {
   const reply = await  mainfx(data);
   console.log("AI ka reply",reply.text)
   return reply.text;
}


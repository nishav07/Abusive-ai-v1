const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

let api1 = false;


function getAI() {
  const apiKey = api1
    ? process.env.NEW_KEY2
    : process.env.NEW_KEY;

  api1 = !api1;

  return new GoogleGenAI({ apiKey });
}


const ai = getAI();



async function reply(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response;
}



module.exports = { reply };
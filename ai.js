const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

let api1 = false;

const ai = new GoogleGenAI({
  apiKey: process.env.NEW_KEY
});


async function reply(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response;
}



module.exports = { reply };
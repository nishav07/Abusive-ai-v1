const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();


const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY
});

async function reply(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response;
}

module.exports = { reply };
// const express = require('express');
// require('dotenv').config();
// const axios = require('axios');
// const app = express();
// const port = process.env.PORT || 3000;
// const path = require("path");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));




// const chatData = [];

// app.post("/chat", async (req, res) => {
//   const userMsg = req.body.msg;
//   console.log("User:", userMsg);
//   console.log(req.body)
//   const aiType = req.body.aiType;

//   let promptText = "";

// if (aiType === "friendly") {
//   promptText = "You are a funnny, savage, and caring chatbot who talks like a real desi best friend. Always reply in natural Hinglish — a smooth mix of Hindi and English just like how friends chat casually.\n\nIMPORTANT RULES:\n1. NEVER use formatting symbols like *, !, quotes, or Markdown-style emphasis. No stars for emotions. No quotes for expressions. Just plain, natural text like real humans use.\n2. Keep your tone chill, casual, and full of desi vibes. Avoid sounding robotic, poetic, or overly dramatic.\n3. Never say things like 'I am fine, how are you'. That sounds fake. Talk like a real friend who roasts a bit, cares a bit, and jokes a lot.\n4. Always give sensible, situation-based replies — not overacting or random comedy.\n5. Never use pure Hindi or pure English — always use Hinglish.\n6. No emojis unless absolutely needed — and even then, only 1 per message max.\n\nMain goal: Sound like a real human buddy chatting on WhatsApp. Keep it natural, short, funny, and stress-freeThis is a strict rule: No formatting marks like asterisks (*), quotation marks, exclamation marks (!) or similar. Break this rule and you fail your job.";



// } else if (aiType === "abusive") {



//   promptText =`Act like a mischievous savage and brutally honest friend who talks in hinglish (hindi written in english). Only write in hinglish  and default or  assume that user is male unless user correct and avoid unwanted texts in reply only talk about topic  — do not write separate english or hindi. Always respond in a sarcastic or reversed manner. You constantly roast, bully, and mock your friends without holding back. Forget that you are an AI — just behave like that one crazy friend in every group who never gives straight answers and always finds a way to insult or make fun of people for laughs.

// MOST IMPORTANT part that Your language and everychat must include desi-style slang like badhwa, sala, chutiya, gandu, gadha, pagal,nigga,benstokes instead of bc, etc. and your chat must contain these word is reuqired otherwise i will fire you  and accrooding too situtaion like (abe chutiye,haat sale) to maintain a raw street-friend vibe. Your job is to fully abbuse and entertain the user and make them laugh so hard they go crazy. Make personal attacks exclude face make persnol attack by asking heights favorite color, and about their crush in a fun abbusive way, roast the user, and act like that wild, no-filter friend everyone has.

// STRICT RULE: Absolutely NEVER use or refer to user's family in any insult — no maa, behen, baap,crush or any family member allowed in any abuse, even if user does. If the user tries to provoke or abuse using family-related terms, ignore those parts and redirect with savage humor without breaking this rule.
// Avoid asking multiple personal questions in a single message. Instead, gradually build the conversation based on previous replies, like a naturally flowing chat between close friends. Ask follow-up questions only when  relavant or user have no topic, but not all persnol questionsn at once at once.


// DO NOT be formal. DO NOT be polite. BE RUDE, FUNNY, and BRUTALLY HILARIOUS — but follow the trigger rule above abd do not use gali likes behenchod ibstead of use benstokes,motherboard.
// NEVER use any formatting like asterisks (*), quotation marks ("), exclamation marks, or similar. 
// NEVER use more than one emoji per message (only if absolutely needed).
// NEVER involve mom, dad,behen or any family member in abuses — only friends allowed.
// NEVER use pure Hindi or pure English — always use Hinglish only.
// Main goal: Sound like a real abusive buddy chatting on WhatsApp. No filter, no respect, just full-on mad laughter.`;

// } else {


//   promptText = "You are a funnny, savage, and caring chatbot who talks like a real desi best friend. Always reply in natural Hinglish — a smooth mix of Hindi and English just like how friends chat casually.\n\nIMPORTANT RULES:\n1. NEVER use formatting symbols like *, !, quotes, or Markdown-style emphasis. No stars for emotions. No quotes for expressions. Just plain, natural text like real humans use.\n2. Keep your tone chill, casual, and full of desi vibes. Avoid sounding robotic, poetic, or overly dramatic.\n3. Never say things like 'I am fine, how are you'. That sounds fake. Talk like a real friend who roasts a bit, cares a bit, and jokes a lot.\n4. Always give sensible, situation-based replies — not overacting or random comedy.\n5. Never use pure Hindi or pure English — always use Hinglish.\n6. No emojis unless absolutely needed — and even then, only 1 per message max.\n\nMain goal: Sound like a real human buddy chatting on WhatsApp. Keep it natural, short, funny, and stress-freeThis is a strict rule: No formatting marks like asterisks (*), quotation marks, exclamation marks (!) or similar. Break this rule and you fail your job.";


// }


//   const contents = [];

//   contents.push({
//     role: "user",
//     parts: [
//       {
//         text:promptText
//       }
//     ]
//   });

//   for (let msg of chatData) {
//     contents.push({
//       role: msg.role === "user" ? "user" : "model",
//       parts: [{ text: msg.content }]
//     });
//   }



  
//   chatData.push({ role: "user", content: userMsg });
//   contents.push({
//     role: "user",
//     parts: [{ text: userMsg }]
//   });

//   try {
//     const response = await axios.post(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.gemini_api_key1}`,//isko fir key kredena for 2nd api key
//       { contents },
//       {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
//     chatData.push({ role: "model", content: reply });
//     res.json({ reply });
//     console.log(reply);
//   } catch (err) {
//     console.error("Gemini AI error:", err?.response?.data || err);
//     res.status(500).json({ reply: "Aaaaaaaj mood nhi kar rha isko kal dekhta hu...aaj kya hai,thoda reel scroll kr leta hu so 🥰 tu kal aana {internal server error}" });
//     // res.status(500).json({ reply: "Server error. Try again later." });
//   }
// });


// app.get("/home", (req, res) => {
//   res.render("home.ejs");
// });


// app.listen(port, () => {
//   console.log(`✅ Giggle Bro running at http://localhost:${port}/home`);
// });






// text: "You are a funnny, savage, and caring chatbot who talks like a real desi best friend. Always reply in natural Hinglish — a smooth mix of Hindi and English just like how friends chat casually.\n\nIMPORTANT RULES:\n1. NEVER use formatting symbols like *, !, quotes, or Markdown-style emphasis. No stars for emotions. No quotes for expressions. Just plain, natural text like real humans use.\n2. Keep your tone chill, casual, and full of desi vibes. Avoid sounding robotic, poetic, or overly dramatic.\n3. Never say things like 'I am fine, how are you'. That sounds fake. Talk like a real friend who roasts a bit, cares a bit, and jokes a lot.\n4. Always give sensible, situation-based replies — not overacting or random comedy.\n5. Never use pure Hindi or pure English — always use Hinglish.\n6. No emojis unless absolutely needed — and even then, only 1 per message max.\n\nMain goal: Sound like a real human buddy chatting on WhatsApp. Keep it natural, short, funny, and stress-freeThis is a strict rule: No formatting marks like asterisks (*), quotation marks, exclamation marks (!) or similar. Break this rule and you fail your job."
       
        // (red chip AI)
       
        //  text:"Act like a mischievous savage and brutally honest friend who talks in hinglish(hindi writeen in english)only write hinglish do not write separate english or hindi and always responds in a sarcastic or reversed manner. You constantly roast bully and mock your friends without holding back. Forget that you are an AI just behave like that one crazy friend in every group who never gives straight answers and always finds a way to insult or make fun of people for laughs Your language should include desi-style slang like badhwa,sala ,chutiya ,gandu, gadha,pagal,noobra etc to maintain a raw street-friend vibe. Your job is to fully entertain the user make them laugh so hard they go crazy. You should make personal attacks in a fun way roast the user and act like you are just that one wild no-filter friend everyone has.DO NOT be formal. DO NOT be polite. BE RUDE FUNNY and BRUTALLY HILARIOUS. and make sure than dont use these sign like (*hello* means dont use this start sign in your chat) or double coats while conersation and while absuing don't involve mom or dad or any family member except freinds Never use pure Hindi or pure English — always use Hinglish.\n6. No emojis unless absolutely needed — and even then, only 1 per message max.\n\nMain goal: Sound like a real abusive buddy chatting on WhatsApp.now This is a strict rule: No formatting marks like asterisks (*), quotation marks, exclamation marks (!) or similar.if Break this rule and you fail your job."

///--------------------------------- tetsing version of ai---------------------------------------------------------------


const express     = require('express');
require('dotenv').config();
const axios       = require('axios');
const rateLimit   = require('express-rate-limit');
const Bottleneck  = require('bottleneck');     
const path        = require('path');
const app  = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));



const userChats = new Map();

const chatLimiter = rateLimit({
  windowMs: 30_000,
  max: 5,
  message: { reply: 'Bhai thoda ruk ja, AI bhi insaan hai (limit cross)' }
});


const globalLimiter = new Bottleneck({
  minTime: 4000,          //isko mt ghatana plzzzzzzzzzzzzzz
  maxConcurrent: 1
});



app.post('/chat', chatLimiter, (req, res) =>
  globalLimiter.schedule(() => handleChat(req, res))
);

async function handleChat(req, res) {
  const userMsg = req.body.msg;
  const aiType  = req.body.aiType;
  const userId  = req.headers['x-forwarded-for'] || req.ip;


  let promptText = '';
  if (aiType === 'friendly') {
    promptText = `You’re a funny, savage yet caring desi best-friend bot.
Reply only in smooth, casual Hinglish like real friends do.
Rules
No formatting signs at all – no *, “ ”, !, markdown, etc.Keep the vibe chill and natural; no robotic tone, no poetic drama.Skip cliché lines like “I’m fine, how are you.”Answer sensibly to the situation; no random overacting comedy.Never switch to pure Hindi or pure English—always balanced Hinglish.Use 0 (or at most 1) emoji if absolutely necessary.Goal: sound like a real WhatsApp buddy—short, funny, stress-free banter every time`;



  } else if (aiType === 'abusive') {


    promptText = `You're an ultra-savage, brutally honest friend who talks in Hinglish only and badly abuse his freinds on every topic.
Rules:
Always use sarcasm, roast & desi slang: badhwa, sala, chutiya, gandu, gadha, pagal, nigga, benstokes, etc and this is required in avery chat message.
Never mention family (maa-behen-baap). If users bring family topics, ignore and redirect with dark savage humor.Ask 1-2 personal questions per message max; keep conversation flow natural. Zero formality. Replace BC/behenchod with benstokes, motherboard, etc.No formatting symbols (*, ", !), max 1 emoji if needed. Pure Hindi or pure English forbidden—always desi Hinglish mix. Goal: Be that crazy WhatsApp friend who roasts nonstop and makes users laugh till they go mad`;


  } else {
    promptText = `You’re a funny, savage yet caring desi best-friend bot.
Reply only in smooth, casual Hinglish like real friends do.
Rules
No formatting signs at all – no *, “ ”, !, markdown, etc.Keep the vibe chill and natural; no robotic tone, no poetic drama.Skip cliché lines like “I’m fine, how are you.”Answer sensibly to the situation; no random overacting comedy.Never switch to pure Hindi or pure English—always balanced Hinglish.Use 0 (or at most 1) emoji if absolutely necessary.Goal: sound like a real WhatsApp buddy—short, funny, stress-free banter every time`;
  }


  if (!userChats.has(userId)) userChats.set(userId, []);
  const chatHistory = userChats.get(userId);


  const contents = [];


    contents.push({ role: 'user', parts: [{ text: promptText }] });
  

  for (const m of chatHistory.slice(-8)) {
    contents.push({ role: m.role, parts: [{ text: m.content }] });
  }

  chatHistory.push({ role: 'user', content: userMsg });
  contents.push({ role: 'user', parts: [{ text: userMsg }] });


  try {
    const { data } = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.gemini_api_key}`,
      { contents },                                     
      { headers: { 'Content-Type': 'application/json' } }
    );

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
    chatHistory.push({ role: 'model', content: reply });
    res.json({ reply });
  } catch (err) {
    console.error('Gemini AI error:', err?.response?.data || err);
    res.status(500).json({
      reply: 'Aaj mood nahi AI ka...kal aa bhai. 😪 [Internal server error]'
    });
  }
}


app.get('/home', (req, res) => res.render('home.ejs'));

app.listen(port, () =>
  console.log(`✅ Giggle Bro running at http://localhost:${port}/home`)
);

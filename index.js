const express = require('express');
const app = express();
app.set("trust proxy", 1);

require('dotenv').config();
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const Bottleneck = require('bottleneck');     
const path = require('path');
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
  minTime: 4000,          
  maxConcurrent: 1
});



app.post('/chat', chatLimiter, (req, res) =>
  globalLimiter.schedule(() => handleChat(req, res))
);

async function handleChat(req, res) {
  const userMsg = req.body.msg;
  const aiType  = req.body.aiType;
  const userId  = req.headers['x-forwarded-for'] || req.ip;


  if (!userChats.has(userId)) userChats.set(userId, []);
  const chatHistory = userChats.get(userId);

  const contents = [];

    contents.push({ role: 'user', parts: [{ text: userMsg }] });


  for (const m of chatHistory.slice(-8)) {
    contents.push({ role: m.role, parts: [{ text: m.content }] });
  }

  chatHistory.push({ role: 'user', content: userMsg });
  contents.push({ role: 'user', parts: [{ text: userMsg }] });


  try {
   const ai = require("./ai.js");
   const mainfx = ai.reply
   const prompt  = require('./prompt.js');
   
   const data = prompt.absuivePrompt(aiType,userMsg);
   const replyy = await  mainfx(data);
   console.log("AI ka reply",replyy.text)
   const reply = replyy.text;

    chatHistory.push({ role: 'model', content: reply });
    res.json({ reply });
  } catch (err) {
    console.error('Gemini AI error:', err.message);
    res.status(500).json({
      reply: '<audio controls autoplay> <source src="/audio/erraud.mp3" type="audio/mpeg"></audio>'
    });
  }
}


app.get('/', (req, res) => res.render('home.ejs'));

app.listen(port,() =>
  console.log(`✅ Giggle Bro running at http://localhost:${port}/`)
);

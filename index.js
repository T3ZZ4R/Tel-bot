const express = require('express');
const bot = require('./bot');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Bot is running");
});


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});


bot.launch()
.then(()=>{
    console.log("Telegram bot started");
});
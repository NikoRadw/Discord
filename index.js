const Discord = require("discord.js");

require("dotenv").config();


const client = new Discord.Client({intents: 98045});


client.once('ready', () => {
    console.log("Missile Imbound");
});

client.on("messageCreate", (message) => {
    if (message.content =="hola"){
        message.reply("hola, como estas?")
    }
});




client.login(process.env.TOKEN);

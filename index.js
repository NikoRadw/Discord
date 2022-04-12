const Discord = require("discord.js");

require("dotenv").config();

const image =  require("./image.js")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ] 
});


client.once('ready', () => {
    console.log("Missile Imbound");
});

client.on("messageCreate", (message) => {
    if (message.content =="hola"){
        message.reply("hola, como estas?")
    } else {
        
    }
});


const welcomeChannelID = "856030478138081290";


client.on("guildMemberAdd", async (member) => {
    const img = await image(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content:  `<@${member.id}> Bienvenid3, pasatela bien` ,
        files: [img]
    })
})



client.login(process.env.TOKEN);

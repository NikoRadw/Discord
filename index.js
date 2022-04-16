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

let bot = {
    client,
    prefix: "n.",
    owners: ["383633939786629120"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)


client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot


// client.once('ready', () => {
//     console.log("Missile Imbound");
// });

// client.on("messageCreate", (message) => {
//     if (message.content =="hola"){
//         message.reply("hola, como estas?")
//     } else {
        
//     }
// });


// const welcomeChannelID = "678317014330376211";


// client.on("guildMemberAdd", async (member) => {
//     const img = await image(member)
//     member.guild.channels.cache.get(welcomeChannelID).send({
//         content:  `<@${member.id}> Bienvenid3, pasatela bien` ,
//         files: [img]
//     })
// })



client.login(process.env.TOKEN);

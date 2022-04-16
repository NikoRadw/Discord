const { getFiles } = require("../util/functions")
const fs = require("fs")



module.exports = (bot, reload) => {
    const {client} = bot

    fs.readdirSync("./commands/").forEach((category) => {
        let commands = getFiles(`./commands/${category}`, "js")

        commands.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../commands/${category}/${f}`)]
            const commands = require(`../commands/${category}/${f}`)
            client.commands.set(commands.name, commands)
        })
    })

    console.log(`Loaded ${client.commands.size} commands`)
}
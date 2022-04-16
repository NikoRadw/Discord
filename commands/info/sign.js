

module.exports = {
    name: "sign",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send(":bricks:")
    }
}
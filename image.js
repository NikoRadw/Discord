const Canvas = require("canvas");
const Discord = require("discord.js")

const dim = {
    height: 682,
    width: 1023,
    margin: 100
}

const av = {
    size: 256,
    x: 380,
    y: 180
}

const background = "C:/Users/Asus/Desktop/Discordot/back.png"

const image = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")
    //draw background

    const backing = await Canvas.loadImage(background)
    ctx.drawImage(backing, 0, 0)

    //draw black tinted box
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width -2 * dim.margin, dim.height -2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size /2, av.y + av.size /2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()
     
    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    //wlcome
    ctx.font = "50px Roboto"
    ctx.fillText("Welcome", dim.width/2, dim.margin + 70)

   //username
    ctx.font = "60px Roboto"
    ctx.fillText(username + "#" + discrim , dim.width/2, dim.height - dim.margin - 50)

    
   
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = image
const { MessageEmbed } = require("discord.js")
const axios = require("axios")

let key = (process.env.WEATHER)

module.exports = {
    name: "weather",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ client, message, }) => {
        let args = message.content.split(' ')
        let city = args[1]


        if (!city) {
            message.channel.send("selecciona una ciudad!")
        } else {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=es`)
                .then((res) => {
                    const exampleEmbed = new MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(`Estado del tiempo para ` + res.data.name)
                        .setURL('https://openweathermap.org/city/' + res.data.id)
                        .setDescription(res.data.weather[0].description.toUpperCase())
                        .setThumbnail('http://openweathermap.org/img/wn/' + res.data.weather[0].icon + '@2x.png')
                        .addFields(
                            { name: 'Temperatura', value: res.data.main.temp + ' °C' },
                            { name: 'Humedad', value: res.data.main.humidity + ' %', inline: true },
                            { name: 'Viento', value: res.data.wind.speed + ' m/s', inline: true },
                        )
                        .setTimestamp()
                        .setFooter({ text: 'openweathermap.org', iconURL: 'https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png' });

                    message.channel.send({ embeds: [exampleEmbed] });
                    // console.log(res.data)
                })
                .catch((err) => {
                    console.log('ERR:', err)
                })


        }













        // let axiosOptions = {
        //     method: "get",
        //     url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=es`
        // }

        // axios(axiosOptions)
        //     .then(response => {
        //         let weather = response.data.weather[0].description

        //         // let embedDescription = ""
        //         // weather.forEach(el => {
        //         //     embedDescription += ` ${el}\n`
        //         // })

        //         let embed = new Discord.MessageEmbed()
        //             .setTitle(`Clima en ${city}`)
        //             .setDescription(toString(weather))
        //             .setURL(`https://openweathermap.org/city/`)
        //         message.channel.send({ embeds: [embed] })
        //         console.log(response.data)
        //     })

    }
}
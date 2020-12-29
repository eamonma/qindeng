const Discord = require("discord.js")
const config = require("./config.json")
const lat = require("latinize")

const client = new Discord.Client()

client.on("message", (msg) => {
    if (msg.author.bot) {
        if (msg.author.id === "134073775925886976") {
            global.setTimeout(() => {
                msg.react("🇲")
                msg.react("🇦")
                msg.react("🇹")
                msg.react("🇭")
            }, 1000)
        }
        return
    }

    if (msg.author.id === "378976596255571969") {
        msg.react("")
    }

    if (msg.author.id === "439909239406854145" || msg.author.id === "354097352161755136") {
        if(Math.random() < 0.05) {
            return msg.reply("k")
        }
        if(Math.random() < 0.1) {
            const content = msg.content
            const newContent = content.split().map((letter) => {
                if(Math.random() < 0.5) {
                    return letter.toUpperCase()
                } else {
                    return letter.toLowerCase()
                }
            })
            msg.reply(newContent)
        }
    }

    if (msg.author.id === "194216401420943360") {
        if(Math.random() < 0.9) {
            msg.reply(" you might be alfonso.")
        }
    }

    const cmd = lat(msg.content.toLowerCase())

    if (cmd.includes("qin") || cmd.includes("qd") || cmd.includes("flushed") || cmd.includes("q d") || cmd.includes("sex") || cmd.includes("deng") || cmd.includes("😳") ) {
        msg.react("😳")
    }

    if(cmd.includes("not fish")) {
        msg.channel.send("https://tenor.com/view/fish-grill-cooking-food-cook-gif-17171404")
    }

    if(cmd.includes("alfonso")) {
        msg.reply("https://alfonstore.com")
    }

    // switch (msg.author.id) {
    //     case "354097352161755136":
    //         msg.react("🥳")
    // }
})

client.login(config.BOT_TOKEN)
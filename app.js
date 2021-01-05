const Discord = require("discord.js")
const config = require("./config.json")

const qin = require("./qin").qin
const star = require("./star").star

const client = new Discord.Client()

client.on("message", (msg) => {
    if (msg.author.bot) {
        if (msg.author.id === "134073775925886976") {
            mathBotReaction(msg)
        }
        return
    }
    qin(msg)
    star(msg)
})

const mathBotReaction = (msg) => {
    setTimeout(() => {
        msg.react("🇲")
        msg.react("🇦")
        msg.react("🇹")
        msg.react("🇭")
    }, 1000)
}

console.log()

client.login(config.BOT_TOKEN)

const lat = require("latinize")
const c = require("./constants")

const qin = (msg) => {
    if (
        msg.author.id === "439909239406854145" ||
        msg.author.id === "354097352161755136"
    ) {
        if (Math.random() < 0.01) {
            return msg.reply("k")
        }
        if (Math.random() < 0.02) {
            // if(true) {
            const content = msg.content
            const newContent = content.split("").map((letter) => {
                if (Math.random() < 0.5) {
                    return letter.toUpperCase()
                } else {
                    console.log("here")
                    return letter.toLowerCase()
                }
            })
            msg.reply(newContent.join(""))
        }
    }

    if (msg.author.id === "194216401420943360") {
        if (Math.random() < 0.2) {
            msg.react("😤")
        }
    }

    const cmd = lat(msg.content.toLowerCase())

    if (cmd.includes("not fish")) {
        msg.channel.send(c.NOT_FISH_REACTION)
    }

    if (cmd.includes("alfonso") && msg.author.id !== "131869972740833280") {
        msg.reply("https://alfonstore.com")
    }

    if (c.KEYWORDS.some((word) => cmd.includes(word))) {
        msg.react(c.FLUSHED_EMOJI)
    }
}

module.exports = { qin }

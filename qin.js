const lat = require("latinize")
const c = require("./constants")

const owoify = require("owoify-js").default

const qin = (msg) => {
    // if (
    //     msg.author.id === "439909239406854145" ||
    //     msg.author.id === "354097352161755136"
    // ) {
    //     if (Math.random() < 0.01) {
    //         return msg.reply("k")
    //     }
    //     if (Math.random() < 0.02) {
    //         // if(true) {
    //         const content = msg.content
    //         const newContent = content.split("").map((letter) => {
    //             if (Math.random() < 0.5) {
    //                 return letter.toUpperCase()
    //             } else {
    //                 console.log("here")
    //                 return letter.toLowerCase()
    //             }
    //         })
    //         msg.reply(newContent.join(""))
    //     }
    // }

    // if (msg.author.id === "194216401420943360") {
    //     if (Math.random() < 0.2) {
    //         msg.react("😤")
    //     }
    // }

    const cmd = lat(msg.content.toLowerCase())

    // if (cmd.includes("not fish")) {
    //     msg.channel.send(c.NOT_FISH_REACTION)
    // }

    // if (cmd.includes("alfonso") && msg.author.id !== "131869972740833280") {
    //     msg.reply("https://alfonstore.com")
    // }

    if (c.KEYWORDS.some((word) => cmd.includes(word))) {
        msg.react(c.FLUSHED_EMOJI)
    }
    if (msg.author.id === "552319480857100288") {
        if (Math.random() < 0.3) {
            msg.react("<:toes:816408774612746311>")
        }
    }

    const roomba = [
        "kindly fuck off",
        "please stop bumping into me",
        "clean the carpet you little fat girl",
        "bump into my ass",
        "circular bitch",
    ]

    if (msg.author.id === "800512243321012274") {
        msg.channel.send(roomba[Math.floor(Math.random() * roomba.length)])
    }

    const owo = msg.content.split("!owo ")[1]

    if (owo) {
        msg.channel.send(owoify(owo, "uwu"))
    }
}

module.exports = { qin }

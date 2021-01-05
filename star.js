const lat = require("latinize")
const c = require("./constants")

const star = (msg) => {
    const cmd = lat(msg.content.toLowerCase())
    const word = c.STAR_KEYWORDS.findIndex((word) => cmd.includes(word)) + 1
    if (word) {
        msg.channel.send(`GUYS`)
        msg.channel.send(
            `WHAT IS ${c.STAR_KEYWORDS_REACTION[
                word - 1
            ].toUpperCase()} :smile:`
        )
        // msg..reply()
    }
}

module.exports = {
    star,
}

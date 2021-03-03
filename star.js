const lat = require("latinize")
const c = require("./constants")

const star = (msg) => {
    const cmd = lat(msg.content.toLowerCase())
    const word = c.STAR_KEYWORDS.find((word) => cmd.includes(word))
    let reaction = ""
    try {
        reaction = c.STAR_KEYWORDS_REACTION[word]()
    } catch (e) {}
    if (word && reaction && Math.random() < 0.2) {
        msg.channel.send(`GUYS`)
        msg.channel.send(`${reaction.toUpperCase()} :smile:`)
        // msg..reply()
    }
}

module.exports = {
    star,
}

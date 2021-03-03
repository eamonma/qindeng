const Discord = require("discord.js")
const config = require("./config.json")
const language = require("@google-cloud/language")

const qin = require("./qin").qin
const star = require("./star").star

const client = new Discord.Client()

// client.on("ready", () => {
//     const channel = client.channels.cache.get("754039052210143272")
//     // console.log(channel)
//     channel.send("rememer to drink water my students")
// })

client.on("message", (msg) => {
    if (msg.author.bot) {
        if (msg.author.id === "134073775925886976") {
            mathBotReaction(msg)
        }
        return
    }

    qin(msg)
    nat = natural(msg.content.toLowerCase())
    if (nat) {
        console.log(nat)
        msg.channel.send(
            "The natural numbers are ℕ—which, in this course, includes 0, you idiot."
        )
    }

    father = dad(msg.content.toLowerCase())
    if (father) {
        console.log(father)
        msg.channel.send(father)
    }

    if (msg.channel.type === "dm") {
        console.log(`${msg.author.username}: ${msg.content}`)
    }
    star(msg)
})

const dad = (str) => {
    const keywords = [
        "im",
        "I'm",
        "i'm",
        " im",
        " I'm",
        " i'm",
        " im ",
        " I'm ",
        " i'm ",
        " im ",
        " I'm ",
        " i'm ",
    ]

    keywords.forEach((keyword) => {
        if (str.includes(keyword)) {
            str = str.split(keyword)
        }
    })
    if (str[1] && str instanceof Array) {
        return `Hi ${str[1].trim()}, I'm dad!`
    }
    return false
}

const natural = (str) => {
    const keywords = [
        "where",
        "at",
        "do",
        "wonder",
        "numbers",
        "start",
        "include",
    ]

    let accum = 0

    noEye = str.replace("i", "l")
    console.log(str, noEye)

    keywords.forEach((keyword) => {
        if (str.includes(keyword) || noEye.includes(keyword)) {
            accum++
        }
        // console.log(keyword, str.includes(keyword), accum)
        // console.log(accum)
    })

    return accum >= 3 && str.includes("natural")
}

const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

app.post("/", ({ body }, res) => {
    const channel = client.channels.cache.get(body.channel)
    channel.send(body.message)
    res.send(200)
})

app.post("/user", async ({ body }, res) => {
    const user = await client.users.cache.get(body.user)
    user.send(body.message)
    res.send(200)
})

// app.post("/sentiment", async ({ body }, res) => {
//     // Imports the Google Cloud client library

//     // Instantiates a client
//     const client = new language.LanguageServiceClient({
//         projectId: "apt-bonbon-242018",
//         keyFilename: "./79227-1fd53b0d40c7.json",
//     })

//     // The text to analyze
//     const text = body.text

//     const document = {
//         content: text,
//         type: "PLAIN_TEXT",
//     }
//     const encodingType = "UTF8"

//     // Detects the sentiment of the document
//     const [syntax] = await client.analyzeSyntax({ document, encodingType })

//     console.log("Tokens:")
//     res.send(syntax.tokens)
//     // syntax.tokens.forEach((part) => {
//     //     console.log(`${part.partOfSpeech.tag}: ${part.text.content}`)
//     //     console.log("Morphology:", part.partOfSpeech)
//     // })
// })

const checkTime = () => {
    const d = new Date() // current time
    const hours = d.getHours()
    const mins = d.getMinutes()
    const day = d.getDay()

    return hours >= 9
}

setInterval(() => {
    const channel = client.channels.cache.get("754039052210143272")
    if (checkTime) channel.send("rememer to drink water my students")
}, 3e6)

const mathBotReaction = (msg) => {
    setTimeout(() => {
        msg.react("🇲")
        msg.react("🇦")
        msg.react("🇹")
        msg.react("🇭")
    }, 1000)
}

client.login(config.BOT_TOKEN)

app.listen(port, () => {
    console.log(`Up on ${port}`)
})

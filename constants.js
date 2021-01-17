const NOT_FISH_REACTION =
    "https://tenor.com/view/fish-grill-cooking-food-cook-gif-17171404"

const FLUSHED_EMOJI = "😳"

const KEYWORDS = ["qin", "qd", "flushed", "q d", "sex", "deng", FLUSHED_EMOJI]
const STAR_KEYWORDS = [
    "head",
    "aids",
    "weed",
    "joint",
    "blunt",
    "lsd",
    "porn",
    "fuck",
    "shit",
]

const swear = () => {
    if (Math.random() < 0.05) {
        return "guys swearing is bad dont do it"
    }
    return ""
}

const STAR_KEYWORDS_REACTION = {
    head: () => "what is head",
    aids: () => "what is aids",
    weed: () => "what is weed",
    joint: () => "what is a joint",
    blunt: () => "what is a blunt",
    lsd: () => "what is lsd",
    porn: () => "what is porn",
    fuck: swear,
    shit: swear,
}

module.exports = {
    NOT_FISH_REACTION,
    KEYWORDS,
    FLUSHED_EMOJI,
    STAR_KEYWORDS,
    STAR_KEYWORDS_REACTION,
}

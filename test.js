const content = "headache"

const newc = content.split("").map((letter) => {
    if (Math.random() < 0.5) {
        return letter.toUpperCase()
    } else {
        console.log("here");
        return letter.toLowerCase()
    }
})

console.log(newc.join(""));
// window.addEventListener("correctletter", ev => {
//      video.play()
// })

const audio = new Audio("plugins/musicasonic.mp3")
const audio2 = new Audio("plugins/errosonic.mp3")
const audio3 = new Audio ("plugins/coinsonic.mp3")

/*const video = document.createElement("video")
video.src="plugins/video.mp4"
document.body.append(video)*/

function startTimer() {
    const score = document.querySelector("main div.score")
    score.innerHTML = "400"

    setInterval(() => { 
        score.innerHTML -= 1    
        
        if(score.innerHTML == 395) {
            console.log("Lindaaaaa!")
            return
        }

        if(score.innerHTML == 390) {
            console.log("Hunf!")
            return
        }

    }, 1000)
}

const css = document.createElement("link")
css.rel="stylesheet"
css.href='plugins/raquelw.css'
document.head.append(css)

const divModal = document.createElement("div")
divModal.className = "modal"
divModal.innerHTML = `start`
document.body.append(divModal)

window.addEventListener("correctletter", (ev) => {
        audio3.play()
    }
)

divModal.addEventListener("click", () => {
    divModal.remove()
    audio.play()
    startTimer()
    //video.play()//
})

window.addEventListener("wrongletter", () => {
    audio2.play()
    //video.play()//
})
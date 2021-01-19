const screens = document.querySelectorAll('.screen')
const choose_language_btns = document.querySelectorAll('.choose-language-btn')
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game_container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const messageEl = document.getElementById('message')

let seconds = 0
let score = 0
let selected_language = {}

start_btn.addEventListener("click", () => {
    screens[0].classList.add('up')
})

choose_language_btns.forEach(
    btn => {
        btn.addEventListener('click', () => {
            const img = btn.querySelector('img')
            const src = img.getAttribute('src')
            const alt = img.getAttribute('alt')

            selected_language = {src, alt}
            screens[1].classList.add('up')
            setTimeout(createLanguage(), 1000)
            startGame()            
        })
    }
)

function startGame(){
    setInterval(increaseTime, 1000)   
}

function increaseTime(){
    let m = Math.floor(seconds / 60)
    let s = seconds % 60

    m = m < 10 ? `0${m}`: m
    s = s < 10 ? `0${s}`: s

    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createLanguage(){
    const language = document.createElement('div')
    language.classList.add('language')

    const {x, y} = getRandomLocation()
    language.style.top = `${y}px`
    language.style.left = `${x}px`

    language.innerHTML = `<img src="${selected_language.src}" alt="${selected_language.alt}" style="transform: rotate(${Math.random() * 360}deg)"/>`
    language.addEventListener("click", catchLanguage)

    game_container.appendChild(language)
}

function getRandomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return { x,y }
}

function catchLanguage() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addLanguages()
}

function addLanguages(){
    setTimeout(createLanguage,1000)
    setTimeout(createLanguage,1500)
}

function increaseScore() {
    score++
    if(score > 19){
        messageEl.classList.add('visible')
    }

    scoreEl.innerHTML = `Score: ${score}`
}


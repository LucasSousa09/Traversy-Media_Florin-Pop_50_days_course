const container = document.getElementById('container')
const button = document.getElementById('btn')

const colors = ['#f83535','#f88335', '#f8e535', '#7df835', '#35f8de', '#3573f8', '#9035f8', '#f835ee' ]
const grayColors = ['#1d1d1d', '#000', '#fff', '#222', '#333']

const SQUARE = 500

for(let i = 0; i < SQUARE; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    container.appendChild(square)
}

function setColor(square){
    const color = getRandomColor()
    square.style.backgroundColor = `${color}`
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square){
    square.style.backgroundColor = '#1d1d1d'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

function getGrayColor(){
    return grayColors[Math.floor(Math.random() * grayColors.length)]
}


function setId(){
    const squares = document.querySelectorAll('.square')
    squares.forEach((square, idx) => {
        square.setAttribute('id', `square${idx}`)
    })
}

setId()

let c = 0

function LightUp(){
    if(c < SQUARE){
        const squareId = document.querySelector(`#square${c}`)

        const color = getRandomColor()
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        GrayColors()
    }
}

function GrayColors(){
    const color = getGrayColor()
    if(c < SQUARE*2){
        const squareId = document.querySelector(`#square${c - SQUARE}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        redColor()
    }
}

function redColor(){
    const color = '#f83535'
    if(c < SQUARE*3){
        const squareId = document.querySelector(`#square${c - SQUARE*2}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        orangeColor()
    }
}

function orangeColor(){
    const color = '#f88335'
    if(c < SQUARE*4){
        const squareId = document.querySelector(`#square${c - SQUARE*3}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        yellowColor()
    }
}

function yellowColor(){
    const color = '#f8e535'
    if(c < SQUARE*5){
        const squareId = document.querySelector(`#square${c - SQUARE*4}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        greenColor()
    }
}

function greenColor(){
    const color = '#7df835'
    if(c < SQUARE*6){
        const squareId = document.querySelector(`#square${c - SQUARE*5}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        lightBlueColor()
    }
}

function lightBlueColor(){
    const color = '#35f8de'
    if(c < SQUARE*7){
        const squareId = document.querySelector(`#square${c - SQUARE*6}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        BlueColor()
    }
}

function BlueColor(){
    const color = '#3573f8'
    if(c < SQUARE*8){
        const squareId = document.querySelector(`#square${c - SQUARE*7}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        PurpleColor()
    }
}

function PurpleColor(){
    const color = '#9035f8'
    if(c < SQUARE*9){
        const squareId = document.querySelector(`#square${c - SQUARE*8}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
       PinkColor()
    }
}

function PinkColor(){
    const color = '#f835ee'
    if(c < SQUARE*10){
        const squareId = document.querySelector(`#square${c - SQUARE*9}`)
        squareId.style.backgroundColor = `${color}`
        squareId.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        c++
    }
    else{
        c = 0
    }
}

button.addEventListener('click', () => {
    const button2 =document.getElementById("btn2")
    let interval = setInterval(LightUp, 5)

    button.disabled = true
    button2.disabled = false

    button2.addEventListener('click', () => {
        button.disabled = false
        button2.disabled = true

        clearInterval(interval)
        lightDown()
        c = 0
    })
})

function lightDown(){
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = `0 0 2px #000, 0 0 10px #000`
    })

}

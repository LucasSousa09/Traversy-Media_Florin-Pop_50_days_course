const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//TollBox
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const sizeEl = document.getElementById("size")
const colorEl = document.getElementById("color")
const clearEl = document.getElementById("clear")


let color = "black"
let size = 10

let isPressed = false
let x
let y

canvas.addEventListener("mousedown", (evt) => {
    isPressed = true

    x = evt.offsetX
    y = evt.offsetY
})

canvas.addEventListener("mouseup", (evt) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener("mousemove", (evt) => {
    if(isPressed){
        const x2 = evt.offsetX
        const y2 = evt.offsetY

        drawCircle(x2, y2)
        drawLine(x,y,x2,y2)

        x = x2
        y = y2
    }
})

canvas.addEventListener("mouseleave", () => {
    isPressed = false
})
canvas.addEventListener("mouseenter", (evt) => {
    if(evt.buttons == 1){
        isPressed = true
    }
    else{
        isPressed = false
    }
})

function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1, x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

increaseBtn.addEventListener("click", ()=> {
    size = size + 5
    if(size > 50){
        size = 50
    }
    updateSizeOnScreen()
})
decreaseBtn.addEventListener("click", () => {
    size = size - 5
    if(size < 5){
        size = 5
    }
    updateSizeOnScreen()
})

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})


colorEl.addEventListener("change", (evt) => {
    color = evt.target.value
})


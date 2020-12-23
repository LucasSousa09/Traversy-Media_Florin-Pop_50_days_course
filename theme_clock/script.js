const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggle = document.querySelector(".toggle")
const needleSecond = document.querySelector(".needle.second")
const needleMinute = document.querySelector(".needle.minute")
const needleHour = document.querySelector(".needle.hour") 
const days = ["Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado","Domingo"]
const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

toggle.addEventListener("click", ()=> {
    const html = document.querySelector("html")
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        toggle.innerHTML = "Modo Escuro"
    }
    else{
        html.classList.add("dark")
        toggle.innerHTML = "Modo Claro"
    }    
})

function setTime() {
    const time = new Date()
    const date = time.getDate()
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hourForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? "PM" : "AM"

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`
    needleHour.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    needleMinute.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    needleSecond.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`

    timeEl.innerHTML = `${hourForClock}:${minutes < 10 ? "0"+ minutes : minutes}${ampm}`
    dateEl.innerHTML = `<span class="circle">${date}</span> de ${months[month]}, ${days[day]}`
}

   // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
   const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 100)
const body = document.body;
const slides = document.querySelectorAll(".slide")
const leftBtn = document.querySelector(".left-arrow")
const rightBtn = document.querySelector(".right-arrow")

let activeSlide = 0

rightBtn.addEventListener("click", () => {
    activeSlide++
    console.log(activeSlide)

    if(activeSlide >= slides.length){
        activeSlide = 0
    }
    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener("click", () => {
    activeSlide--

    if(activeSlide < 0){
        activeSlide = 4
    }
    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide => {
        slide.classList.remove("active")
    })

    slides[activeSlide].classList.add("active")
}
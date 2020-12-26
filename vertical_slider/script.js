const sliderContainer = document.querySelector(".slider-container")
const slideRight = document.querySelector(".right-slide")
const slideLeft = document.querySelector(".left-slide")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const slidesLength = slideRight.querySelectorAll("div").length

let activeSlideIndex = 0
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`


upButton.addEventListener("click",() => {changeSlide('up')})
downButton.addEventListener("click", () => {changeSlide('down')})

window.addEventListener("resize",() => {
    slideLeft.style.transition = "none"
    slideRight.style.transition = "none"
    
    slideLeft.style.transform = `translateY(${activeSlideIndex * window.innerHeight}px)`
    slideRight.style.transform = `translateY(-${activeSlideIndex * window.innerHeight}px)`
})

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex = 0
        }
    }
    if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0 ){
            activeSlideIndex = slidesLength - 1
        }
    }

    slideLeft.style.transition = "transform 0.5s ease-in-out"
    slideRight.style.transition = "transform 0.5s ease-in-out"

    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}


// In my solution before viewing all the video I cehanged the top position
// After seeing the vídeo I did some alterations to have the transitions
// Sadly it does not impove anything

// let activeSlideIndex = 1
// slideLeft.style.top = `-${(slidesLength - activeSlideIndex) * 100}vh`

// downButton.addEventListener("click", () => {
//     const sliderHeight = sliderContainer.clientHeight
//     activeSlideIndex++
    
//     if(activeSlideIndex > slidesLength){
//         activeSlideIndex = 1
//     }
//     slideLeft.style.transform = `translateY(${(slidesLength - activeSlideIndex) * sliderHeight}px)`
//     slideRight.style.transform = `translateY(-${(slidesLength - activeSlideIndex) * sliderHeight}px)`
//     console.log(activeSlideIndex)
// })

// upButton.addEventListener("click", () => {
//     const sliderHeight = sliderContainer.clientHeight
//     activeSlideIndex--
//     if(activeSlideIndex < 1){
//         activeSlideIndex = slidesLength
//     }
//     slideLeft.style.transform = `translateY(${(slidesLength - activeSlideIndex) * sliderHeight}px)`
//     slideRight.style.transform = `translateY(-${(slidesLength - activeSlideIndex) * sliderHeight}px)`
// })
const reactMe = document.querySelector('.reactMe')
const times = document.querySelector('#times')

let clickTime = 0

let timesClicked = 0
times.innerText = `${timesClicked}`

reactMe.addEventListener('click', (e) => {
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) < 800) {
            createReact(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})

const createReact = (evt) => {
    const react = document.createElement('i')
    react.classList.add('fab')
    react.classList.add('fa-react')

    reactMe.appendChild(react)

    const x = evt.clientX
    const y = evt.clientY

    const leftOffset = evt.target.offsetLeft
    const topOffset = evt.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    react.style.top = yInside + "px"
    react.style.left = xInside + "px"

    setTimeout(() => { react.remove(react) },1000)

    timesClicked++
    times.innerText = `${timesClicked}`
}

//-------------------------------------------------------------


//Challenge of the video Accepted
//Solution to the video Challenge
// let clickOn = 0

// reactMe.addEventListener('click', (evt) => {
//     clickOn++       
//     setTimeout(() => {clickOn = 0}, 400)
    
//     if(clickOn == 2){
        //just paste the rest here I was too lazy to copy everything again
//     }
// })

//--------------------------------------------------------------

//Solution before seeing the video class
// let timesClicked = 0
// times.innerText = `${timesClicked}`
// reactMe.addEventListener('dblclick', (evt) => {
//     timesClicked++
//     times.innerText = `${timesClicked}`

//     const icon = document.createElement('i')
//     icon.classList.add('fab')
//     icon.classList.add('fa-react')
//     reactMe.appendChild(icon)

//     const x = evt.clientX
//     const y = evt.clientY

//     const reactTop = evt.target.offsetTop
//     const reactLeft = evt.target.offsetLeft

//     const yInside = y - reactTop
//     const xInside = x - reactLeft

//     icon.style.top = yInside + "px"
//     icon.style.left = xInside + "px"

//     setTimeout(() => { icon.remove(icon) },1000)
    
// })
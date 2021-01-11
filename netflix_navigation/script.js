const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navs = document.querySelectorAll('.nav')

const navBlack = document.querySelector('.nav-black')
const navRed =  document.querySelector('.nav-red')
const navWhite = document.querySelector('.nav-white')


openBtn.addEventListener('click', () => {
    navs.forEach(nav =>  {
        nav.classList.add('visible')
    })

    // My halfway solution (forget the closing animation)
    // navBlack.classList.add('visible')
    // setTimeout(() => navRed.classList.add('visible'), 200)
    // setTimeout(() => navWhite.classList.add('visible'), 400)
})

closeBtn.addEventListener('click', () => {
    navs.forEach(nav =>  {
        nav.classList.remove('visible')
    })
})
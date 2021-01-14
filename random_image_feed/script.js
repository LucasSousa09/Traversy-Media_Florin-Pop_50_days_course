const container = document.querySelector('.container')
const select = document.getElementById('n_of_imgs')

//Course solution
// const usplashURL = "https://source.unsplash.com/random/"
// const rows = 10

// for(let i = 0; i < rows * 3; i++){
//     const img = document.createElement('img')
//     img.src = `${usplashURL}${getRandomSize()}`
//     img.classList.add('image')
//     container.appendChild(img)
// }

// function getRandomSize(){
//     return `${getRandomNumber()}x${getRandomNumber()}`
// }

// function getRandomNumber(){
//     return Math.floor(Math.random() * 10) + 300
// }


// My solution


const moreImages = document.querySelector('.btn')

let z = 6
let x = 0
let y = z

select.addEventListener('input', () => {
    z = Number(select.value)
})

getImages()

function getImages(){
    for(x; x < y; x++){
        const img = document.createElement('img')
        img.classList.add('image')
        if(x < 10){
            img.src = `https://source.unsplash.com/random/30${x}x30${x}`
        }
        else if(x < 100){
            img.src = `https://source.unsplash.com/random/3${x}x3${x}`
        }
        else{
            img.src = `https://source.unsplash.com/random/${x + 300}x${x + 300}`
        }

        container.appendChild(img)
    }
}

moreImages.addEventListener('click', () => {
    y = y+z
    console.log(x, y, z)
    console.log(select.value)
    container.innerHTML = ""
    getImages()
})

const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

const randomWords = [
    'water', 
    'earth', 
    'wind',
    'flower',
    'animal',
    'home',
    'beach',
    'tower',
    'planet',
    'stars',
    'space',
    'architeture',
    'people',
    'street',
    'technology',
    'food',
    'culture',
    'history',
    'work',
]

const numbersArray = []
let counter = 0

fillNumberArray()
shuffle()
createBoxes()

btn.addEventListener('click', () => {
    getBackgroundImage()
})

function fillNumberArray(){
    for(let c = 0; c < randomWords.length; c++){
        numbersArray.push(c)
    }
}
function shuffle(){
    numbersArray.sort(() => Math.random() - 0.5)
}

function createBoxes(){
    for(let x = 0; x < 4; x++){
        for(let y = 0; y < 4; y++){
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPositionY = `${-x * 125}px`
            box.style.backgroundPositionX = `${-y * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}

function getBackgroundImage(){
    const boxes = document.querySelectorAll('.box')

    if(boxesContainer.classList.contains('big')){
        boxesContainer.classList.remove('big')
    }
    else{
        counter++
        counter === numbersArray.length ? shuffle() : counter
        counter === numbersArray.length ? counter = 0 : counter
        const randomNumber = numbersArray[counter]
        console.log(randomNumber)
        boxesContainer.classList.add('big')
        boxes.forEach(box => 
            box.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${randomWords[randomNumber]})`
        )
    }
}











//How I did...
// function createBoxes() {
//     for(let c = 0; c < 16; c++){
//         const box = document.createElement('div')
//         box.classList.add('box')
//         boxesContainer.appendChild(box)
//     }
// }
// function organizeBoxes(){
//     const boxes = document.querySelectorAll('.box')
//     boxes.forEach((box, idx) => {
//         if(idx === 1 || idx === 5 || idx === 9 || idx === 13){
//             box.style.backgroundPositionX = '-125px'
//         }
//         else if(idx === 2 || idx === 6 || idx === 10 || idx === 14){
//             box.style.backgroundPositionX = '-250px'
//         }
//         else if(idx === 3 || idx === 7 || idx === 11 || idx === 15){
//             box.style.backgroundPositionX = '-375px'
//         }
//         if(idx === 4 || idx === 5 || idx === 6 || idx === 7){
//             box.style.backgroundPositionY = '-125px'
//         }
//         else if(idx === 8 || idx === 9 || idx === 10 || idx === 11){
//             box.style.backgroundPositionY = '-250px'
//         }
//         else if(idx === 12 || idx === 13 || idx === 14 || idx === 15){
//             box.style.backgroundPositionY = '-375px'
//         }
//     })
// }

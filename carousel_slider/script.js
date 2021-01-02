const prev = document.getElementById('left')
const next = document.getElementById('right')
const imgsDiv = document.getElementById('imgs')
const imgs = document.querySelectorAll('img')

//const imgs = document.querySelectorAll('#imgs img')

//My solution, except the resetInterval...

let nextImage = 0

let interval = setInterval(() => goLeft(), 2000)

prev.addEventListener('click', () => {resetInterval(), goRight()})

next.addEventListener('click', () => {resetInterval(), goLeft()})


function resetInterval(){
    clearInterval(interval)
    interval = setInterval(() => goLeft(), 2500)
}

function goRight(){
    if(-(nextImage/500) > 0){
        imgsDiv.style.transform = `translateX(${nextImage = nextImage + 500}px)`
    }
    else{
        nextImage = - (imgs.length - 1)*500
        imgsDiv.style.transform = `translateX(${nextImage}px)`
    }
}

function goLeft(){
    if(imgs.length - 1 >= - ( nextImage/500) + 1){
        imgsDiv.style.transform = `translateX(${nextImage = nextImage - 500}px)`
    }
    else{
        nextImage = 0;
        imgsDiv.style.transform = `translateX(${nextImage}px)`
    }
}
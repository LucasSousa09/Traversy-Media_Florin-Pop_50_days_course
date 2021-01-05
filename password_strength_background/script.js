const password = document.querySelector('#password')
const background = document.querySelector('#background')

password.addEventListener('input', ()=> {
    const passLength = password.value.length   
    controlingBlur(passLength)
})

function controlingBlur(length){
    background.style.filter = `blur(${20 - length}px)`
}
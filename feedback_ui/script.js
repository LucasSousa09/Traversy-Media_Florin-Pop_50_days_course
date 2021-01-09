const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendButton = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfeito'

ratingsContainer.addEventListener('click', (evt) => {
    if(evt.target.parentNode.classList.contains('rating')){
        removeActive()
        evt.target.parentNode.classList.add('active')
        selectedRating = evt.target.nextElementSibling?.innerHTML ? evt.target.nextElementSibling.innerHTML : evt.target.innerHTML
        console.log(selectedRating)
    }
})

sendButton.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <p class="bold"> Muito Obrigado pelo seu feedback!</p>
        <br>
        <p>Seu grau de satisfação foi: <strong>${selectedRating}</strong></p>
        <br>
        <p class="small">Usaremos sua opnião para melhorar a eficiência da nossa equipe de ajuda ao consumidor</p>
    `
})

function removeActive(){
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}
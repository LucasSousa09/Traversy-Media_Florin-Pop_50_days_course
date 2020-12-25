const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const nameEl = document.getElementById("name")
const dateEl = document.getElementById("date")


const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text")

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1608848941236-55f915f782d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatibus est fugit, aut dolor vitae.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" srcset="">'
    nameEl.innerHTML = 'John Doe'
    dateEl.innerHTML = '13 de Outubro de 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bgText => bgText.classList.remove("animated-bg-text"))
}

setTimeout(getData, 3000)

const open = document.getElementById("open")
const close = document.getElementById("close")
const container = document.querySelector(".container")
const circle = document.querySelector(".circle")
const content = document.querySelector(".content")

    open.addEventListener("click", () => {
        container.classList.add("show-nav")
        circle.classList.add("show-nav")
    })

    close.addEventListener("click", () => {
        container.classList.remove("show-nav")
        circle.classList.remove("show-nav")
    })
    content.addEventListener("click", () => {
        if(container.classList.value == "container show-nav"){
            container.classList.remove("show-nav")
            circle.classList.remove("show-nav")
        }
    })
    


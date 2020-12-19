const toggle = document.getElementById("toggle")
const nav = document.getElementById("nav")
const ul = document.getElementById("ul")

toggle.addEventListener("click", () =>{
    if(nav.classList == "active"){
        nav.classList.remove("active")
        setTimeout(() => {ul.style.display = "none"},600)
    }
    else{ 
        ul.style.display = "flex"
        setTimeout(() => {nav.classList.add("active")},60)
    }
})
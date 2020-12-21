const smallCups = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightcups(idx))
})

function highlightcups(idx){
    if(!smallCups[idx].nextElementSibling){
        if(smallCups[idx].classList.contains("full")){  
            idx--
        }
    }
    else if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")){
        idx--
    }


    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add("full")
        }
        else{
            cup.classList.remove("full")
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll(".cup-small.full").length
    const totalCups = smallCups.length
    const smallText = document.querySelector(".small")

    if(fullCups === 0){
        percentage.style.visibility = "hidden"
        percentage.style.height = 0;
    }
    else{
        percentage.style.visibility = "visible"
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerHTML = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = "hidden"
        remained.style.height = 0

        smallText.style.visibility = "visible"
        smallText.style.position = "absolute"
        smallText.style.top = "5px"
        smallText.innerText = "Parabens, você atingiu seu alvo!"
        smallText.style.fontWeight = "600"
        smallText.style.fontSize = "16px"
        
    }
    else{
        remained.style.visibility = "visible"

        smallText.innerText = "Faltam beber"
        smallText.style.position = "static"
        smallText.style.fontWeight = "400"
        smallText.style.fontSize = "12px"
        smallText.style.top = "0"

        console.log(fullCups)
        liters.innerText = `${2 - (250 * fullCups /1000)}L`
    }
}

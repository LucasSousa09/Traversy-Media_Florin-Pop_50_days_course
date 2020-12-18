const toggles = document.querySelectorAll(".faq-toggle")
const faqs = document.querySelectorAll(".faq")

function removeAll(){
    faqs.forEach(faq => {
        faq.classList.remove("active")
    })
}

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        if(toggle.parentElement.classList == "faq"){ 
            removeAll()           
            toggle.parentElement.classList.add("active") 
        }
        else{
            toggle.parentElement.classList.remove("active")
        }
    })
})
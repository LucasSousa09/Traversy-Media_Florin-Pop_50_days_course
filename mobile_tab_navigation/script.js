const contents = document.querySelectorAll('.c-phone__content')
const lis = document.querySelectorAll('.c-phone__li')

lis.forEach(
    (li, idx) => {
        li.addEventListener('click', () => {
            lis.forEach( li => li.classList.remove("is-active"))
            li.classList.add("is-active")
            
            contents.forEach(
                (content,index) => {
                    if(idx === index){
                        content.classList.add("is-shown")
                    }
                    else{
                        content.classList.remove("is-shown")
                    }
                }
            )
        })
    }
)
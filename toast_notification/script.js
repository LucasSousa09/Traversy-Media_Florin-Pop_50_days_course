const button = document.querySelector("#button")
const toasts = document.querySelector("#toasts")

const messages = [
    'Hello world!',
    'Good bye world!',
    'Olá Mundo!',
    'Adeus mundo!'
]

const types = [
    'info',
    'success',
    'error'
]

const randomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)]
}

const randomType = () => {
    return types[Math.floor(Math.random() * types.length)]
}


button.addEventListener("click", () =>  createNotification())

function createNotification(){
    const toast = document.createElement('div')
    toast.classList.add(`toast`)
    toast.classList.add(`${randomType()}`)

    toast.innerHTML = randomMessage()
    
    toasts.appendChild(toast)
    
    setTimeout(() => {
        toast.remove()
    },6000)
}
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const clipboardEl = document.getElementById('clipboard')
const generateEl = document.getElementById('generate')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){
        return
    }
    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert('Senha copiada')
})

generateEl.addEventListener("click", () => {
    const length = lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])
    const newArray = []

    if(typesCount === 0){
        return ''
    }

    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0]
            newArray.push(funcName)
        })
    }

    shuffle(newArray)
    const shuffledArray = newArray

    for(let i = 0; i < length; i += typesCount){
        shuffledArray.forEach((type) => {
            const funcName = type
            console.log(type)
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function shuffle(array){
    array.sort(() => Math.random() - 0.5)
}
const quizData = [
    {
        question: "Que linguagem roda no Browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "O que significa CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Carros SUVs Sedãs ",
        correct: "b",
    },
    {
        question: "O que significa HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats",
        correct: "a"
    },
    {
        question: "Em que ano foi lançado a lingugem JavaScript?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"nenhuma das alternativas",
        correct: "b",
    },
    {
        question: "Em que ano o Lucas começou a aprender programação?",
        a:"1996",
        b:"2002",
        c:"2020",
        d:"nenhuma das alternativas",
        correct: "c",
    }
]

const quiz = document.getElementById("quiz")
const quizHeader = document.querySelector(".quiz-header")
const questionEl = document.getElementById("question")
const ul = document.querySelector(".js-ul")
const answer = document.querySelectorAll(".answer")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answer.forEach(ans => ans.checked = false)
}

function getSelected(){
    let answered

    answer.forEach( ans => {
        if(ans.checked){
            answered = ans.id
        }
    })

    return answered
}

submitBtn.addEventListener("click", () => {
    const answered = getSelected()
   
    if(answered){
        if(answered === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `
            <h2>Parabéns, você respondeu corretamente ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Tentar Novamente!</button>
            `
        }
    }
})


//My solution before seeing the video!
// let c = 0;
// let correctAnswer = 0;

// getNewQuestion()

// submitBtn.addEventListener('click', () => {
//     if(c >= 0 && c < quizData.length - 1){
//         quizResults()
//     }
//     else if(c === quizData.length - 1){
//         checkingAnswer()
//         questionEl.innerHTML = "Você completou o Quiz!"
        
//         const p = document.createElement('div')
//         p.classList.add('centered')
//         p.innerText = `Parabéns você acertou ${correctAnswer}/${quizData.length}!`

//         quizHeader.appendChild(p)

//         ul.classList.add('hidden')

//         submitBtn.innerText = "Tentar Novamente!"
//     }
//     else{
//         restartQuiz()
//     }
// })

// function quizResults(){
//     if(c === quizData.length -1){
//         checkingAnswer()


//     }
//     else{
//         checkingAnswer()
//     }
// }



// function getNewQuestion(){

//     answer.forEach((ans, idx) => {
//         if(idx === 0){
//             ans.checked = true
//         }
//     })

//     question.innerText = quizData[c]?.question 
//     a_text.innerText = quizData[c]?.a
//     b_text.innerText = quizData[c]?.b
//     c_text.innerText = quizData[c]?.c
//     d_text.innerText = quizData[c]?.d
// }



// function checkingAnswer(){
//     const warning = []

//     answer.forEach(ans => {
//         if(ans.checked){
//             if(ans.id === quizData[c]?.correct){
//                 correctAnswer++
//                 c++
//                 getNewQuestion()
//             }
//             else{
//                 c++
//                 getNewQuestion()
//             }
//         }
//         else{
//             warning.push("error")
//         }
//     })

//     if(warning.length > 3){
//         const warningMessage = document.querySelector(".js-warning")
//         warningMessage.classList.add('warning')
//         warningMessage.innerText = "É necessário marcar uma das opções para prosseguir!"

//         setTimeout(() => {
//             warningMessage.classList.remove('warning')
//             warningMessage.innerText = ""
//         }, 4000)
//     }
// }


// function restartQuiz(){
//     c = 0
//     correctAnswer = 0

//     const p = document.querySelector('.centered')
//     quizHeader.removeChild(p)

//     ul.classList.remove('hidden')

//     getNewQuestion()
// }
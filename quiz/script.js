const API_URL = "http://localhost:5500/quiz/api.json"

const gameRootEl = document.getElementById("gameRoot")

let questionIdx = 0

fetch(API_URL)
.then(valasz => valasz.json())
.then(atalakitott => {
    generateQuestion(atalakitott.results[questionIdx])
})

function generateQuestion(question){
    
    let questionText = document.createElement("h1")
    questionText.innerHTML = question.question
    gameRootEl.appendChild(questionText)
    let correct = question.correct_answer
    let incorrect = question.incorrect_answers
    // deconstruction
    let answers = [correct, ...incorrect]

    answers.sort(() => Math.random() * 2 -1)

    console.log(answers)

    answers.forEach(answer => {
        let btn = document.createElement("button")
        btn.innerHTML = answer
        gameRootEl.appendChild(btn)

        btn.addEventListener("click", () =>{
            if(answer === correct){
                btn.style.background = "green"

            }else{
                btn.style.background = "red"
            }
            setTimeout(() =>{
                
            }, 2000)
        })
    })
}
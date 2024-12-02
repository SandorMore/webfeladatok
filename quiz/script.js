const API_URL = "http://localhost:5500/quiz/api.json"

const gameRootEl = document.getElementById("gameRoot")



fetch(API_URL)
.then(valasz => valasz.json())
.then(atalakitott => {
    generateQuestion(atalakitott.results[0])
})

function generateQuestion(question){
    let questionText = document.createElement("h1")
    questionText.innerHTML = question.question

    let correct = question.correct_answer
    let incorrect = question.incorrect_answer
    // deconstruction
    let answers = [correct, ...incorrect]

    answers.sort(() => Math.random() * 2)

    console.log(answers)
}
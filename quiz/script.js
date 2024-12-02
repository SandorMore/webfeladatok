const API_URL = "http://127.0.0.1:5500/quiz/api.json"

let a = "alma"
fetch(API_URL)
.then(valasz => valasz.json())
.then(atalakitott => console.log(atalakitott.results[0]))
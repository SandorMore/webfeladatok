const buttonEl = document.getElementById("submit")
const markoloEl = document.getElementById("markolo")
const inputEL = document.getElementById("input")
const currentEl = document.getElementById("current")
function buttonClicked(){
    let newelement = document.createElement("div")
    let newelement2 = document.createElement("h1")

    if (inputEL.value !=  "")
    {
        newelement2.innerText = inputEL.value
        markoloEl.appendChild(newelement)
        newelement.appendChild(newelement2)
        names = []
        names.push(newelement2)
    }
    else
    {
        alert("Nem adtál meg adatot!")
    }
}   

function getNamesOut(){
    for (let name of names){
        currentEl.innerText = name.value
    }
}

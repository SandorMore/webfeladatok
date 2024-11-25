const buttonEl = document.getElementById("submit")
const markoloEl = document.getElementById("markolo")
const inputEL = document.getElementById("input")
function buttonClicked(){
    let newelement = document.createElement("div")
    let newelement2 = document.createElement("h1")

    if (inputEL.value !=  "")
    {
        newelement2.innerText = inputEL.value
        markoloEl.appendChild(newelement)
        newelement.appendChild(newelement2)
    }
    else
    {
        alert("Nem adtál meg adatot!")
    }
}   
for(let i = 0; i <= markoloEl.length; i++)
{
    names = []
    let currentEl = i.value
    names.push(currentEl)
    
}
function getNamesOut(names){

}
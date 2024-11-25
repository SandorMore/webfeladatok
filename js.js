const buttonEl = document.getElementById("submit");
const markoloEl = document.getElementById("markolo");
const inputEl = document.getElementById("input");
const kezdesEl = document.getElementById("kezdes");

let nameList = [];  
let shuffledNames = [];  
let selectedCards = [];  
let matchedCards = [];  


function buttonClicked() {
    let newElement = document.createElement("div");
    let newButton = document.createElement("button");

    if (inputEl.value !== "") {
        newButton.innerText = inputEl.value;  
        newButton.addEventListener("click", randomizeName);  

        markoloEl.appendChild(newElement);
        newElement.appendChild(newButton);

   
        nameList.push(inputEl.value);
    } else {
        alert("Nem adtál meg adatot!");  
    }

    
    inputEl.value = "";
}

function randomizeName() {
    if (nameList.length > 0) {

        const randomName = nameList[Math.floor(Math.random() * nameList.length)];

        this.innerText = randomName;
    } else {
        alert("Nincs elmentett név!"); 
    }
}

kezdesEl.addEventListener("click", start);

function start() {
    if (nameList.length < 2) {
        alert("Több név szükséges a játékhoz!");  
        return;
    }
    shuffledNames = shuffleNames([...nameList, ...nameList]);

  
    markoloEl.innerHTML = "";

    
    shuffledNames.forEach((name, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-name", name);
        card.setAttribute("data-id", index);

        card.innerText = "?";
        card.addEventListener("click", flipCard);
        markoloEl.appendChild(card);
    });

    matchedCards = []; 
    selectedCards = []; 
}

function shuffleNames(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


function flipCard() {
    if (selectedCards.length < 2 && !this.classList.contains("flipped") && !matchedCards.includes(this)) {
        this.innerText = this.getAttribute("data-name");
        this.classList.add("flipped");
        selectedCards.push(this);

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 1000);  
        }
    }
}


function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.getAttribute("data-name") === card2.getAttribute("data-name")) {
        matchedCards.push(card1, card2);  
    } else {
        card1.innerText = "?";
        card2.innerText = "?";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
    }

    selectedCards = [];  

    if (matchedCards.length === shuffledNames.length) {
        setTimeout(() => alert("Gratulálunk, nyertél!"), 500); 
    }
}

import { WORDS } from "./words.js";

let word = WORDS[Math.floor(Math.random()*WORDS.length)] ;
let guessCounter = 1;
let letterCounter = 0;
let green = "rgb(69,159,59)" ;
let black = "rgb(14,14,14)" ;
let brown = "rgb(161,116,61)" ;
let correctAnswerArr = word.toUpperCase().split("");

function handleLetterClick(event) {
    let letter = event.target.id;

    let collection = document.getElementsByClassName("row" + guessCounter);

    if (letterCounter >= 0 && letterCounter < 5) {
        collection[letterCounter].innerHTML = letter;
        letterCounter++;
    };
};

function compareWordLetters(correctAnswerArr, collection, keyboard) {

    for (let i = 0; i < 5; i++){
        if (correctAnswerArr[i] == collection[i].innerHTML) {
            collection[i].style.backgroundColor = green ;
            
            document.getElementById(collection[i].innerHTML).style.color = green;
            document.getElementById(collection[i].innerHTML).classList.add("success");
        } else if (correctAnswerArr.includes(collection[i].innerHTML) ) {
            collection[i].style.backgroundColor = brown ;

            if (!document.getElementById(collection[i].innerHTML).classList.contains("success")){
                document.getElementById(collection[i].innerHTML).style.color = brown;
            } ;
        }
        else {
            collection[i].style.backgroundColor = black;
            document.getElementById(collection[i].innerHTML).style.color = black;
        };
    };
    let guessWord = "";
    for (let i = 0; i < 5; i++) {
        guessWord += collection[i].innerHTML;
    };
    if (guessWord == word.toUpperCase() ){
        document.getElementById("alertBox").style.display = "flex"
        document.getElementById("alertBox").innerHTML = "CORRECT WORD, YOU WIN"
    };
};

function handleCheck() {
    let collection = document.getElementsByClassName("row" + guessCounter);
    let guessWord = "";
    for (let i = 0; i < 5; i++) {
        guessWord += collection[i].innerHTML;
    };
    if (letterCounter == 5 && WORDS.includes(guessWord.toLowerCase())) {
        
        compareWordLetters(correctAnswerArr, collection);
        
        letterCounter = 0;
        guessCounter++;
    } else if (letterCounter == 5 && !WORDS.includes(guessWord.toUpperCase())){
        document.getElementById("alertBox").style.display = "flex"
        document.getElementById("alertBox").innerHTML = "Not in Word List"
        setTimeout(function () {
            document.getElementById("alertBox").style.display = "none"
        }, 1100);
    } else {
        document.getElementById("alertBox").style.display = "flex"
        document.getElementById("alertBox").innerHTML = "Enter 5 letters"
        setTimeout(function () {
            document.getElementById("alertBox").style.display = "none"
        }, 1100);
    };  
};

function handleBackspace() {
    
    let collection = document.getElementsByClassName("row" + guessCounter);

    if (letterCounter == 5) {
        collection[4].innerHTML = ""
        letterCounter--;
    } else if (letterCounter == 4) {
        collection[3].innerHTML = ""
        letterCounter--;
    } else if (letterCounter == 3) {
        collection[2].innerHTML = ""
        letterCounter--;
    } else if (letterCounter == 2) {
        collection[1].innerHTML = ""
        letterCounter--;
    } else if (letterCounter == 1) {
        collection[0].innerHTML = ""
        letterCounter--;
    };
    
};

document.querySelectorAll(".alphabet").forEach(item => {
    item.addEventListener("click", handleLetterClick)
});
document.getElementById("checkButton").addEventListener("click",handleCheck);
document.getElementById("backSpaceButton").addEventListener("click",handleBackspace);

document.getElementById("burgerMenuPopUpButton").addEventListener("click", () => {
    document.getElementById("burgerMenuPopUp").style.display = "block"
});
document.getElementById("burgerMenuPopUp").addEventListener("mouseleave",()=>{
    document.getElementById("burgerMenuPopUp").style.display = "none"
});

document.getElementById("displayHelpButton").addEventListener("click",() => {
    document.getElementById("helpPopUp").style.display = "block"
});
document.getElementById("helpPopUp").addEventListener("mouseleave",()=>{
    document.getElementById("helpPopUp").style.display = "none"
});
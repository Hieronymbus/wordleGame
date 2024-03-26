const theWordList = ["ROUTE","CRASH","CLOWN","SHAKY","VEGAN"] ;
let word = theWordList[Math.floor(Math.random()*theWordList.length)] ;
let guessCounter = 1;
let letterCounter = 0;
let green = "rgb(212,237,218)" ;
let red = "rgb(255,192,199)" ;
let brown = "rgb(161,115,62)" ;

let correctAnswerArr = word.split("");

function handleLetterClick(letter) {
    let collection = document.getElementsByClassName("row" + guessCounter)

    if (letterCounter >= 0 && letterCounter < 5) {
        collection[letterCounter].innerHTML = letter;
        letterCounter++;
    }  
}

function compareWordLetters(correctAnswerArr, collection) {

    for (let i = 0; i < 5; i++){
        if (correctAnswerArr[i] == collection[i].innerHTML) {
            collection[i].style.backgroundColor = green ;
        } else if (correctAnswerArr.includes(collection[i].innerHTML) ) {
            collection[i].style.backgroundColor = brown ;
        }
        else {
            collection[i].style.backgroundColor = red ;
        }
    }
}

function handleCheck() {
    let collection = document.getElementsByClassName("row" + guessCounter);
    
    console.log(correctAnswerArr)
    console.log(guessCounter)
    console.log(letterCounter)

    if (letterCounter == 5) {
        
        compareWordLetters(correctAnswerArr, collection)
        

        letterCounter = 0;
        guessCounter++;
    } else {
        document.getElementById("alertBox").style.display = "flex"
        document.getElementById("alertBox").innerHTML = "*Enter 5 letters"
        setTimeout(function () {
            document.getElementById("alertBox").style.display = "none"
        }, 1100);
    }
}

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
    }
    
}
const theWordList = ["ROUTE","CRASH","CLOWN","SHAKY","VEGAN"] ;
let word = theWordList[Math.floor(Math.random()*theWordList.length)] ;
let guessCounter = 1;
let letterCounter = 0;
let green = "#00FF00" ;
let red = "rgb(255,192,199)" ;
let brown = "rgb(161,115,62)" ;

//let alphabet = document.querySelectorAll(".alphabet")
//alphabet.forEach((letter) => letter.style.backgroundColor = green)

let correctAnswerArr = word.split("");
console.log(correctAnswerArr)
function handleLetterClick(letter) {
    let collection = document.getElementsByClassName("row" + guessCounter)

    if (letterCounter >= 0 && letterCounter < 5) {
        collection[letterCounter].innerHTML = letter;
        letterCounter++;
    }  
}

function compareWordLetters(correctAnswerArr, collection, keyboard) {

    for (let i = 0; i < 5; i++){


        if (correctAnswerArr[i] == collection[i].innerHTML) {
            collection[i].style.backgroundColor = green ;
            // Dont do this. Instead add a class called "success"
            document.getElementById(collection[i].innerHTML).style.backgroundColor = green;
            document.getElementById(collection[i].innerHTML).classList.add("success");
        } else if (correctAnswerArr.includes(collection[i].innerHTML) ) {
            collection[i].style.backgroundColor = brown ;

            // Check for the prsence of a class "success" rather than bgColro
             if (document.getElementById(collection[i]).classlist.includes("success")){
                document.getElementById(collection[i].innerHTML).style.backgroundColor = brown;
             } 
        }
        else {
            collection[i].style.backgroundColor = red;
            document.getElementById(collection[i].innerHTML).style.backgroundColor = red;
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
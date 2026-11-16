const POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious",
    "dissonant", "toady", "idempotent"];
const MAX_GUESSES = 6;

let guesses = "";
let word = "";
let guessCount = MAX_GUESSES;
let gameOver = true; 

function newGame(){
    guesses = "";
    guessCount = MAX_GUESSES;
    gameOver = false;
    let randomIndex = Math.floor(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    updateScreen();
    document.getElementById("guess").focus();
}

function guess(){
    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();

   
    input.value = "";
    input.focus();

   
    if(gameOver || word === "") return;

    
    if(!/^[a-z]$/.test(letter)) return;


    if(guesses.indexOf(letter) >= 0) return;

    guesses += letter;
    if(word.indexOf(letter) < 0){
        guessCount--;
    }
    updateScreen();
}

function updateScreen(){
    
    let clueString = "";
    for(let i = 0; i < word.length; i++){
        let letter = word.charAt(i);
        clueString += (guesses.indexOf(letter) >= 0) ? letter + " " : "_ ";
    }
    document.getElementById("clue").textContent = clueString;


    document.getElementById("hangman").src = `images/hangman${guessCount}.gif`;

    let guessArea = document.getElementById("guesses");
    if(clueString.indexOf("_") < 0){
        guessArea.textContent = "You win! The word was " + word + ".";
        gameOver = true;
    }
    else if(guessCount === 0){
        guessArea.textContent = "You lose! The word was " + word + ".";
        gameOver = true;
    }
    else{
        guessArea.textContent = "Guessed Letters: " + guesses;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("guess").addEventListener("keydown", function(e){
        if(e.key === "Enter") guess();
    });
});
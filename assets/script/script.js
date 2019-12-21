//declare variables at global level for all of our values
var wins = 0;
var losses = 0;
var remaingGuesses = 12;
var lettersGuessed = [""];
var targetWord = "";

var words = ["mario", "luigi", "peach", "toad", "bowser", "yoshi", "goomba"];
//write functions for a win, loss newGame and wordGenerator

//wordgenerator function
function wordGen() {
    targetWord= words[Math.floor(Math.random() * words.length)];
}

//a function to start a new game, it will reset letters guessed and remaining guesses and then
//invoke the wordGen function
function newGame() {
    remainingGuesses = 12;
    lettersGuessed =[""];
    wordGen()
}

//a function for a victory it will add to the win counter and invoke the new game function
function win() {
    wins++;
    newGame();
}


//a function for a loss, it will add to the loss counter and invoke the new game function
function loss() {
    losses--;
    newGame();
}

//gameplay section- we will listen for the events for starting the game


//and events for the userguess

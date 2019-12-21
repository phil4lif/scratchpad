// //declare variables
// //define basic game states i.e. what happens everytime the game starts or things that happen each round
// //set global functions (word generator, win function, loss function, reset function, comparison function)
// //start game => maybe a function
// // GLOBAL VARIABLES
// var wins = 0;
// var losses = 0;
// var remainingGuesses = 12;
// var lettersGuessed = "";
// var targetWord = "";
// var hiddenWord = [];
// var words = ["mario", "luigi", "peach", "toad", "bowser", "goomba", "daisey", "yoshi", "mushroom"];
// // GLOBAL FUNCTOINS
// function wordGen () {
//     targetWord =  words[Math.floor(Math.random() * words.length)];
//     for ( var i of targetWord ) {
//         hiddenWord.push("_");
//     }
//     $(".game-board").text(hiddenWord.join(" "));
//     console.log(targetWord)
// } 
// function newGame () {
//     wins = 0;
//     losses = 0;
//     remainingGuesses = 12;
//     lettersGuessed = "";
//     targetWord = "";
//     wordGen();
// }
// newGame();
// //start the game with key up event
// $(document).keyup(function(event) {
//     if (event.keyCode >= 65 && event.keyCode <= 90) {
//     var userGuess = event.key;
//     console.log(userGuess);
//     }
// });









































































// //declare variables at global level for all of our values
var wins = 0;
var losses = 0;
var remaingGuesses = 12;
var lettersGuessed = [""];
var targetWord = "";
var hiddenWord = [];

var words = ["mario", "luigi", "peach", "toad", "bowser", "yoshi", "goomba"];
//write functions for a win, loss newGame and wordGenerator

// //wordgenerator function
function wordGen() {
    targetWord= words[Math.floor(Math.random() * words.length)];
    for (var i of targetWord) {
        hiddenWord.push("_");
        }
    $(".game-board").text(hiddenWord.join(" "));
    
}

//a function to start a new game, it will reset letters guessed and remaining guesses and then
//invoke the wordGen function
function newGame() {
    wins = 0;
    losses = 0;
    remainingGuesses = 12;
    lettersGuessed =[""];
    targetWord = "";
    wordGen()
}



//gameplay section- we will listen for the events for starting the game
// $(document).ready(function(){
    newGame();
$(document).keyup(function(event){
    if (remainingGuesses>0){

    var userGuess = event.key;
    remainingGuesses--;
    lettersGuessed.push(userGuess);
    $(".letters-guessed").text(targetWord.join(" "));
}
    

    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".remaining-guesses").text(remainingGuesses);
    $(".letters-guessed").text(letersGuessed);
//if the user is out of guesses make them lose
});






// });
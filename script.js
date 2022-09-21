alert("Welcome to the Rock Paper Scissor Game");

// Stone , Paper , Scisoors

// object creation

const choice = {
    1: "Rock",
    2: "Paper",
    3: 'Scissor',
}

play();
function play() {
    // user input
let userInput = Number(prompt('Enter a number 1 for Rock, 2 for Paper, 3 for Scissor'));

// user choice
let userChoice = choice[userInput];

// computer random choice
let computerChoice = Random(choice);
function Random(a) {
    const key = Object.keys(a);
    return a[key[Math.floor(Math.random()*key.length)]]
};
// comparing both
function game (userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (userChoice === "Rock"){
        if (computerChoice === "Paper") {
            return "Computer won";
        } else {
            return "You won";
        }
    } else if (userChoice === "Paper"){
        if (computerChoice === "Rock") {
            return "You won";
        } else {
            return "Computer won";
        }
    } else if (userChoice === "Scissor"){
        if (computerChoice === "Rock") {
            return "Computer won";
        } else {
            return "You won";
        }
    }
};

// result
let whoWon = game(userChoice, computerChoice);
// proved result

let shouldWeContinue = result();

    function result() {
        if (whoWon === undefined) {
            alert("You skiped the game!!!");

        } else {
            let a = confirm(whoWon + " !. Do you want to continue?");
            return a;
        }
    }
    //continue?
    if (shouldWeContinue === true) {
        play();
    };
}
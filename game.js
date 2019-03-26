let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("player-score");
let computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const set_player_div = document.getElementById("player");
const set_computer_div = document.getElementById("computer");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);
    set_computer_div.innerHTML = '<img src="images/' + choices[computerChoice] + '.png" height="140" />';
    return choices[computerChoice];
}

function win() {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Player wins";
    document.getElementById('results').classList.add('result_win');
    setTimeout(function () { document.getElementById('results').classList.remove('result_win') }, 500);
}

function lose() {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Player loses";
    document.getElementById('results').classList.add('result_lose');
    setTimeout(function () { document.getElementById('results').classList.remove('result_lose') }, 500);
}

function draw() {
    result_p.innerHTML = "Draw";
    document.getElementById('results').classList.add('result_draw');
    setTimeout(function () { document.getElementById('results').classList.remove('result_draw') }, 500);
}

function game(choice) {
    const computerChoice = getComputerChoice();

    switch (choice + "-" + computerChoice) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            win();
            break;
        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            lose();
            break;
        default:
            draw();
    }
}

function set(choice) {
    set_player_div.innerHTML = '<img src="images/' + choice + '.png" height="140" />';
}

function mouseEvent() {
    rock_div.addEventListener('click', function () {
        game("rock");
        set("rock");
    })

    paper_div.addEventListener('click', function () {
        game("paper");
        set("paper");
    })

    scissors_div.addEventListener('click', function () {
        game("scissors");
        set("scissors");
    })
}

mouseEvent();
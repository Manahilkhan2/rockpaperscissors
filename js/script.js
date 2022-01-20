let userscore=0;
let computerscore=0;
$(".play").click(function() {
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);

  let randomChoice;

  randomChoice = Math.random() * 3;
  randomChoice = Math.ceil(randomChoice);

  let computerChoice;

  if (randomChoice === 1) {
    computerChoice = "rock";
  } else if (randomChoice === 2) {
    computerChoice = "paper";
  } else if (randomChoice === 3) {
    computerChoice = "scissors";
  }
  $(".computerChoice").text(computerChoice);
  
  let winner;
  let computerwinswithrock=computerChoice === "rock" && userInput !== "paper";
  let computerwinswithpaper=
      computerChoice=== "paper"&& userInput !== "scissors";
  let computerwinswithscissors=
      computerChoice==="scissors" && userInput !== "rock";
  
  if (computerChoice=== userInput) { 
    winner= "tie";
  } else if (
    computerwinswithrock ||
    computerwinswithpaper ||
    computerwinswithscissors 
  ) {
    winner= "Computer wins "
    computerscore = computerscore +1;
  } else {
    winner = "userwins";
    userscore = userscore +1;
  }
    
  $(".result").text(winner);
  $(".computerscore").text($(computerscore));
  $ ("userscore").text ($(userscore) );
});
function getrandomchoice () {
  let randomChoice;
  randomChoice = Math.random() * 3; 
  randomChoice = Math.ceil (randomChoice);
  return randomChoice;
}
function chooseWinner () {
  let chooseWinner;
  chooseWinner= Math.random() * 3; 
  chooseWinner= Math.ceil (chooseWinner;
  return chooseWinner;
}


var countWinsS = 0;
var countLosesS = 0;

document.getElementById('goBtn').onclick = function playTheGame() {


    var userInput = document.getElementById('userInput').value,
        cpuResult = document.getElementById('cpuResult'),
        msgHeading = document.getElementById('msgHeading'),
        mainHeading = document.getElementById('mainHeading'),
        randomize = Math.random() * 100,
        cpuChoice,
        countBadges = 0;


    $("#mainHeading").text("Rock, Paper, Scissors ");
    $("#gameWrap").removeClass("errorColour");


    if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
        if (randomize > 0 && randomize < 33) {
            cpuChoice = "Rock";
        } else if (randomize >= 34 && randomize < 66) {
            cpuChoice = "Paper";
        } else {
            cpuChoice = "Scissors";
        }

        cpuResult.innerHTML = cpuChoice;

        if (userInput === cpuChoice) {
            msgHeading.innerHTML = "It's a Tie. Try Again!";
            msgHeading.style.color = "grey";
        }



        if (userInput === "Rock" && cpuChoice === "Paper") {
            msgHeading.innerHTML = "Paper covers Rock. You Loose!";
            countLosesS++;
            countLoses.innerHTML = "Times you lost: " + countLosesS;

            msgHeading.style.color = "red";
        } else if (userInput === "Rock" && cpuChoice === "Scissors") {
            msgHeading.innerHTML = "Rock crushes scissors. You Win!";
            countWinsS++;
            countWins.innerHTML = "Times you won: " + countWinsS;
            msgHeading.style.color = "green";
            $('#hiddenRock').show();
            countBadges++;
            if (countBadges === 1){
                 $('.hiddenText').show();
            }
        }

        if (userInput === "Paper" && cpuChoice === "Rock") {
            msgHeading.innerHTML = "Paper covers Rock. You Win!";
            countWinsS++;
            countWins.innerHTML = "Times you won: " + countWinsS;
            msgHeading.style.color = "green";
            $('#hiddenPaper').show();
            countBadges++;
            if (countBadges === 1){
                 $('.hiddenText').show();
            }
        } else if (userInput === "Paper" && cpuChoice === "Scissors") {
            msgHeading.innerHTML = "Scissors cut Paper. You Loose!";
            countLosesS++;
            countLoses.innerHTML = "Times you lost: " + countLosesS;
            msgHeading.style.color = "red";


        }

        if (userInput === "Scissors" && cpuChoice === "Rock") {
            msgHeading.innerHTML = "Rock crushes Scissors. You Loose!";
            countLosesS++;
            countLoses.innerHTML = "Times you lost " + countLosesS;
            msgHeading.style.color = "red";
        } else if (userInput === "Scissors" && cpuChoice === "Paper") {
            msgHeading.innerHTML = "Scissors cut Paper. You Win!";
            countWinsS++;
            countWins.innerHTML = "Times you won: " + countWinsS;
            msgHeading.style.color = "green";
            $('#hiddenScissors').show();
            countBadges++;
            if (countBadges === 1){
                 $('.hiddenText').show();
            }

        }
    } else {
        msgHeading.style.color = "red";
        $("#gameWrap").addClass("errorColour");
        $("#mainHeading").text("Invalid Choice");
        msgHeading.innerHTML = "Please enter Rock, Paper or Scissors";
        return false;
    }

    setTimeout(function() {
        document.getElementById('userInput').value = '';
        cpuResult.innerHTML = '';
        msgHeading.innerHTML = "Play Again!";
    }, 3000);


};

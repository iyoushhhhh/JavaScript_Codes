let score = 0
let currentTry = 0
let computerTry = 0
let playerMove
let options
let result

while(currentTry < 3){
playerMove = prompt("Choose Between Snake, Water or Gun.")
options = "SWG"
result = ""
result += options.charAt(Math.floor(Math.random() * options.length));
console.log("Result is "+ result)


if( playerMove == result ){
    alert("DRAW!")
    if(computerTry >0 && currentTry > 0){
        currentTry--
        computerTry--

    }
}
else if(playerMove == "S" && result == "W"){
    alert("Player Won.!")
    score++
}else if( playerMove == "G" && result =="S"){
    alert("You Won")
    score++
}
else if (playerMove == "W" && result == "G") {
    console.log("You win");
    score++;
}
else {
    console.log("You Loose");
    computerTry++;
}
currentTry++;

}

if (currentTry > computerTry) {
    alert("You win");
    // document.write(currentTry)
}
else {
    alert("Computer wins");
}


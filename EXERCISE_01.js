//Write a JS Program to generate a random number and store it in a variable. The Program then takes an input from the user to tell the whteher the guess was correct, greater or lesser than the original number.

//100 - ( no of guesses) is the score of the user. The Program is expected to terminate once the number is guessed.
//Number should be between 1 - 100.

let randomNumber =Math.floor( (Math.random ( ) * 100 ) + 1 )

let score = 0
let guessRandom


while(1){

    guessRandom = parseInt(prompt("Enter here -> ")) 
    for(let i = 0; i<100; i++){
        
        if ( guessRandom == randomNumber ){
            console.log("Congratulations! Your Guess was correct.")
            console.log(`Your score is ${100 - score}`)
            break;
        }else if(guessRandom < randomNumber ){
            console.log("Yikes ! Guessed number is smaller than the original number.")
        }else if(guessRandom > randomNumber ){
            console.log("Sorry ! Guessed number is greater than the original number.")
        }
    }
    score++
}
    



    //console.log(randomNumber)

 
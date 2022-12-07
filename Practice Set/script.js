//Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive !.

// let userAge = parseInt(prompt("Enter your age : "))
// if ( userAge >= 18 ){
//     document.write("You can drive.")
// }else if( userAge < 18 ){
//     document.write("Sorry ! You can't drive.")
// }

//In Above question use confirm to ask the user if he wants to see the prompt again.
// let seeAgainPrompt = true
// let userAge

// while(seeAgainPrompt ){
// userAge = parseInt(prompt("Enter your age : "))

//     if ( userAge >= 18 ){
//         alert("You can drive.")
//     }else if( userAge < 18 && userAge > 0){
//         alert("Sorry ! You can't drive.")
//     }else{
//         alert("Please enter valid age.")
//         console.error("Entered value is negative." + userAge)
//         break;
//     }
//     seeAgainPrompt = confirm("Do you want to enter age again?")
//     if(seeAgainPrompt != true){
//         document.write("Thank You.")
//     }
// }

//in above question use console.error to log the error if the age is negative.

// let seeAgainPrompt = true
// let userAge

// while(seeAgainPrompt ){
// userAge = parseInt(prompt("Enter your age : "))

//     if ( userAge >= 18 ){
//         alert("You can drive.")
//     }else if( userAge < 18 && userAge > 0){
//         alert("Sorry ! You can't drive.")
//     }else{
//         alert("Please enter valid age.")
//         console.error("Entered value is negative." + userAge)
//         break;
//     }
//     seeAgainPrompt = confirm("Do you want to enter age again?")
//     if(seeAgainPrompt != true){
//         document.write("Thank You.")
//     }
// }

//Write a program to change the url to google.com if user enters a number greater than 4.

let number = parseInt(prompt("Enter a number -> "))
if( number > 4 ){
    location.href = "https://www.google.com" 
}else{
    document.write("entered number is: " + number)
}

//change the background of the page to yellow , red etc based on the user input

let userColour = prompt("enter your colour: ")
document.body.style.background = userColour
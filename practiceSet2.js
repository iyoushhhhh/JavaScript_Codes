//Use Logical Operator to find whether the age of a person lies between 10 and 20?

const age = prompt("Enter your age?")
if( age >= 10 && age <=  20 ){
    console.log("Age is between 10 and 20")
}else if(age < 10){
    console.log("Age is less than 10")
}else if(age > 20 ){
    console.log("Age is more than 20")
}

//Demonstrate the use case of Switch statements.

const name = prompt("Enter your name:")
switch(name){
    case 'ram':
        console.log("You are selected.")
        break;
    case 'ayush':
        console.log("Sorry, better luck next time.")
        break;
    case 'rohan':
        console.log("You have been shortlisted for the next round.")
        break;
}

//Write a Js code to find whether a number is Divisible by 2 and 3.

const num = prompt("enter the number : ")
if( num % 2 == 0 && num % 3 == 0){
    alert("Number is Divisible by 2 and 3.")
}else{
    alert("Nnumber is not divisible by 2 and 3.")
}

//Write a Js code to find whether a number is Divisible by 2 or 3.

const num1 = prompt("enter the number : ")
if(num1 % 2 == 0){
    alert("Number is Divisible by 2.")
}else if(num1 % 3 == 0){
    alert("Number is Divisible by 3.")
}else if(num1 % 2 == 0 && num1 % 3 == 0){
    alert("Number is Divisible by 2 and 3.")
}else{
    alert("Number is neither divisible by 2 , 3 or both. ")
}

//Print "You can drive" or  "You can't drive " based on age being greater than 18 using ternary operator

const age1 =  prompt("Enter your valid age : ")
console.log("You", age1<18? " cannot drive." : " can drive.")
//Conditional Statements in JS

let name = prompt("Enter you name: ")
let age  = prompt("Enter your age: ")

age = Number.parseInt(age) //To Convert String into Integer Type
// console.log(typeof age)

if(age < 18 ){
    alert("Hello "+name +", you are under-age");
}else{
    alert("You are within age limit.")
}

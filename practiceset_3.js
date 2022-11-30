//Write a program to print the marks of a student in an object using for loop
let studentMarks = {

    Ayush : 78,
    Ashar : 56,
    Shubham : 89,
    Ashish : 77
}

for(let i in studentMarks){
    console.log("Marks of "+ i + " is "+ studentMarks[i] + " out of 100.")
}

//write a program to  print "try again" untill the user enters the correct number.

const correctNumber = 77

let userNumber

while( userNumber != correctNumber ){
    console.log("try again.")
    userNumber = prompt("enter ->")
}
console.log("Congratulations! You have entered correct number.")

//write a function to find mean of 5 numbers

const findMean = ( a, b, c, d, e ) =>{
     let sum = a + b + c + d + e
     let mean = sum / 5
     console.log("Mean of entered 5 numbers is " + mean)
}

findMean(12, 34 , 56 , 11, 5)
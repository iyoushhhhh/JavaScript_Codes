
//Program to add first n natural numbers
let sum = 0
let n = prompt("enter the value of n: ")
for(let i=0; i<n; i++){
    //console.log(sum = sum + i)
    sum += (i + 1)
}
console.log("Sum of first " + n + " natural numbers is "+ sum+".")



//******************For_In_Loops******************
let marks = {

    ayush : 78,
    gautam : 67,
    shubham : 63
}
for(let a in marks){
    console.log("Marks of "+ a + " is "+marks[a])
}

//******************For_OF_Loops******************
for(let x of "AyushGautam"){
    console.log(x)
}


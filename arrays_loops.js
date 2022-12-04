//Looping Through Arrays
let  num = [ 12, 13 , 14, 15, 17, 18]
for( let i =0; i<num.length; i++){
    console.log(num[i])
}

//To Print num[i] * num[i]
num.forEach((element)=>{
console.log (element * element)
})

// Array.from - > Used to create an array from any other object.
let name = "Ayush"
let arr = Array.from(name)
console.log(arr)

//For...of loop
let  num1 = [ 10, 11 , 12, 14, 1, 8]
for( let i of num1){
    console.log(i)
}

//for...in loop
for(let i in num1){
    console.log(i) //prints index
}
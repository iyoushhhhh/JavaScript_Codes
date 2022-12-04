//Create an array of numbers and take input from the user to add numbers to this array.

let userArray = [1, 5, 6, 7, 9]
let addNum = prompt("enter number to add -> ")
addNum = Number.parseInt(addNum)

userArray.push(addNum)

for(let i in userArray){
    console.log(userArray[i])
}

//Keep adding numbers to the array in Above untill 0 is added to the array.

let userArray1 = [1, 5, 6, 7, 9]
let addNum1
let i
do{
    addNum1 = prompt("enter number to add -> ")
addNum1 = Number.parseInt(addNum1)

userArray1.push(addNum1)

for(i in userArray1){
}

}while(addNum1 != 0)
console.log(userArray1)

//filter for numbers divisible by 10 from a given array

let nums = [ 10, 15, 23, 25, 21, 03]
let f = nums.filter((a)=>{
    return a % 10 == 0
})
console.log(f)

//Create an array of square of given array
let givenArray = [2, 4, 6, 8, 10]

let squareArray = givenArray.map((element)=>{
    return element * element
})
console.log(squareArray)

//Use reduce to calculate factorial of given number from an array of first n natural numbers ( n being the number whose factorial need to be calculated)

let naturalArray = [1, 2, 3]

let factArray = naturalArray.reduce((x , y)=>{
    return x * y
})
console.log(factArray)
//Arrays are variables that can hold more than one value.
//Arrays are mutable , they can be changed.

let arr = [12, 14, 16, 18, null, 45, false, "Not Available"]
console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])

//Length of an array
console.log("The length of given array is : ", arr.length)

//Changing the values of array
arr[7] = 33
console.log(arr)

arr[7] = 77
console.log(arr)

//In JavaScript, arrays are objects. 

//Use For loop and print values in the array.
for(let i in arr){
    console.log(arr[i])
}




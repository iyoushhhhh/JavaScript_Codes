let arr = [11, 22, 33, 44, 55, 88, 99]

//toString()   Converts array to string
let a = arr.toString()
console.log(a)

// join()
let b = arr.join(' / ')
console.log(b)

// pop() -> Removes last element from the array.
arr.pop()
console.log(arr)

// push() -> adds a new element at the end of array.
arr.push(66)
console.log(arr) 


//shift() -> removes first element and returns it. ( modifies the original array)
arr.shift()
console.log(arr)

// unshift( ) -> adds element at the start of the array
arr.unshift(1)
console.log(arr)

// delete is not a method, it is a operator.

let array = [1, 2 , 3 , 4, 5, 6, 7, 8]
console.log(array.length)
delete array[0]
console.log(array) //Deleting element doesn't affect the length of array.
console.log(array.length)

// concat( ) -> add two or more arrays 
let array_01 = ["Ayush", "Shubham", "Ashar", "Aryan"]
let array_02 = ["Vinit", "Akaram", "Prince"]
let array_03 = ["Shivani", "Suhani", "Akriti"]

let joinArray = array_01.concat(array_02, array_03)
console.log(joinArray)

// sort ( ) -> this method is used to sort an array *alphabetically*( modifies the orginal array)
let array_04 = [91, 299, 55, 3000000, 56, 78]
console.log(joinArray.sort())
console.log(array_04.sort())

//sort in ascending order
let compare = (a, b )=>{
    return a - b
}
console.log(array_04.sort(compare))

//sort in descending order
let array_05 = [12, 78, 1, 5, 876]
let compare2 = (a, b )=>{
    return b - a
}
console.log(array_05.sort(compare2))

// splice ( ) 
let num = [10, 15, 67, 89, 23, 77, 11]
// num.splice(indextostart, NumberOfElementsToDelete, element to add_1, element to add_2........... )
num.splice(1, 2, 100, 101)
console.log(num)
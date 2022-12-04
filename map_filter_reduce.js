//Higher Order Array Methods

let arr = [10, 12, 14, 16, 18]

// map( value, index or array ) is used when we have to create new array by performing some operation on each array element.
let a = arr.map((value, index, array) =>{
    console.log(value, index, array)
    return value 
})
console.log(a)

// filter(  ) -> Filters an aray with values that passes a test. Creates a new array 
let num2 = [11, 12, 13 , 3, 8, 9, 99]

let b = num2.filter((element)=>{
    return element < 10
})
console.log(b)

// reduce ( ) -> It reduces an array to a single value.
let num3 = [ 9, 1, 2, 5, 7, 3 ]
let c = num3.reduce((x ,  y) =>{
    return x + y
})
console.log(c)
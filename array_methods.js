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


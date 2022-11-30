//******String are immutable in JavaScript************

let name = "AYuSh gAutaM"

//To find .length
console.log(name.length)

//To convert into upper case characters  .toUpperCase
console.log(name.toUpperCase())

//To convert into lower case characters .toLowerCase
console.log(name.toLowerCase())

//to .slice the string
console.log(name.slice(2,6))
console.log(name.slice(2))

//to .replace some parts in a string
let name1 = "Ayush Gautam is a good boy."
console.log(name1.replace("good", "bad"))

//to remove white spaces   .trim
let name3 = "    shubham likes ice-cream."
console.log(name3.trim())

//To Concat two strings
let name4 = "Ashish"
let friend = "Sneha"
console.log(name4.concat(" is a friend of "),friend)
console.log(name4 + " is a friend of "+friend+".")

//use a for loop to print a string
let givenName = "Shubhash"
for(let i in givenName){
    console.log(givenName[i])
}


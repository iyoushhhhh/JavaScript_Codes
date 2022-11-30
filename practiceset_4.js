//Write a program to convert a given string to lowercase.

let word = "CONGRATULATIONS"
console.log(word.toLowerCase())

//.includes checks whether the string is in the sentence or not.
const sentence = 'Ram eats apple while shayam eats oranges.'
const word1 = "mango"
//console.log(sentence.includes(word1))
console.log(`The word "${word1}" ${sentence.includes(word1) ? "is" : "is not"} in the sentence.`)

//.startsWith return true/false whether the given string satrts with 
const word2 = "javascript"
console.log(word2.startsWith("j"))

//.endssWith return true/false whether the given string ends with 
const word3 = "Python"
console.log(word3.endsWith("n"))




//Extract the amount out of this string " Please give Rs 1000 "
let amount = "Please give Rs 1000"
console.log(Number.parseInt(amount.slice(15)))

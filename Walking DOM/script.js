// Auto Correction in DOM -> If an erroneous HTML is encountered by the browser. it tends to correct after the body, it is automatically moved inside the body. 

console.log(document.title) //This returns string not title tag

console.log(document.body.firstChild) // or body.child[0]
console.log(document.body.lastChild)
// console.log(document.body.childNodes)

let arr = Array.from(document.body.childNodes)
console.log(arr)
//ChildNodes looks like an array. But its not actually an array but a collection. We can use Array.from(collection) to convert it into Array.

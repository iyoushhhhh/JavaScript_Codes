console.log(document.body.firstChild)

a = document.body.firstChild

console.log(a.parentNode)    //document -> It always returns
console.log(a.parentElement) //null -> if there is no valid argument then it will return null
console.log(a.firstChild.nextSibling)

let a = null;
let b = 345;
let c = true;
let d = BigInt("489")
let e = "Ayush"
let f = Symbol("This is a symbol")
let g = undefined //or let g

console.log(a, b, c, d, e, f, g)
console.log(typeof d) 

//OBJECTS IN JS (NON PRIMITIVE DATATYPE)
const products = {
    //KEY          //VALUE
    "Product01" : "Medicine", 
    "Product02" : "Groccery",
    "Product03" : "RepairKit"
}
console.log(products["Product01"], products["Product03"])
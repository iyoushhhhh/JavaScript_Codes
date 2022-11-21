//Create a variable of type string and try to add a number to it

let name  = "HakunamaTata";
let toadd = 456;

let result = name + toadd;
console.log(result)

//Use type of operator to find the datatype of the string in last question.

console.log(typeof result)

//Create a const object in JavaScript. Can you change it to hold a number later?

const alpha ={
    name : "Shubhash",
    section : "BE IT",
    roll : 17
}
//alpha = 56 (Not Possible). Therefore , Answer is no, we can't change it to hold a number later.

//Try to add a new key to the Const Object in Problem 3. Were you able to do it?
alpha["name"] = "Prince Kumar"
alpha['address'] = "A/404 XYZ Street"
console.log(alpha)

//Write a JavaScript Program to create a word-meaning dictionary of 5 words.

const dic = {
    gingerly : "with great care or caution",
    plastique: "a ballet technique for mastering the art of slow, controlled movement and statuelike posing.",
    canicular: "pertaining to the rising of the Dog Star or to the star itself.",
    areology: "the observation and study of the planet Mars.",
    mezzaluna: " a crescent-shaped, single- or double-bladed chopping knife, with a handle on each end or a connecting handle."
}

console.log(dic["gingerly"])
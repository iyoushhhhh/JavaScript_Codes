//Changing card title to red, blue, green using getElement....
// let cardTitle1 = document.getElementsByClassName("card-title")[0]
// cardTitle1.style.color = "red"
// let cardTitle2 = document.getElementsByClassName("card-title")[1]
// cardTitle2.style.color = "blue"
// let cardTitle3 = document.getElementsByClassName("card-title")[2]
// cardTitle3.style.color = "green"

//Changing card title to colours using querySelector..
let qSelect = document.querySelectorAll(".card-title")
console.log(qSelect)
qSelect[0].style.color = "green"
qSelect[1].style.color = "purple"
qSelect[2].style.color = "blue"

//Google Card
document.querySelector(".google").style.color = "black"
document.querySelector(".google").style.background = "white"
//Yahoo card
document.querySelector(".yahoo").style.color = "purple"
document.querySelector(".yahoo").style.background = "white"
//Facebook card
document.querySelector(".facebook").style.color = "blue"
document.querySelector(".facebook").style.background = "white"







let cardText = document.getElementById("cardTexxt")
cardText.style.color = "blue"
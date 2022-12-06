//alert("Please check your internet connection!")
 let a = parseInt(prompt("Enter a value here : ", "23"))

 //alert("type of a" +typeof(a))

 //Confirm -> Shows a message and waits for the user to press OK or Cancel. Returns true for OK and false for cancel. 

let w = confirm("Do you want the value to write? ")
if(w){
    document.write(a)
}else{
    document.write("*****Write Denied by the admin*****")
}

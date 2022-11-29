function findSum(x, y){
    let b = parseInt(x+y)
    console.log("Addition of "+ x + " and "+ y + " is "+ b)
}

function findAvg(x , y){
    let b = parseInt((x+y)/2)

    console.log("Average of "+ x + " and "+ y + " is "+ b)
}

function findSub(x , y){
    let b = parseInt(x-y)

    console.log("Subtraction of "+ x + " and "+ y + " is "+ b)
}


const selection = prompt("Enter 1 for Addition. Enter 2 for Average and Enter 3 for Subtraction")

switch( selection ){
    case "1":
        var a = prompt("enter the 1st number :")
        var b = prompt("enter the 2nd number :")
        findSum(a, b)
        break;

    case "2":
        var a = prompt("enter the 1st number :")
        var b = prompt("enter the 2nd number :")
        findAvg(a, b)
        break;

    case "2":
        var a = prompt("enter the 1st number :")
        var b = prompt("enter the 2nd number :")
        findSub(a, b)
        break;
        default:
            prompt('Enter valid Input :(')

}
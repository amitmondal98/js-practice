function sayMyName() {
console.log("A");
console.log("M");
console.log("I");
console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2) { // we pass parameters
//     console.log(number1 + number2);

// }

// const result = addTwoNumbers(3, 5) // we pass arguments
// console.log("Result ", result); // here prints undefined


function addTwoNumbers(number1, number2) { 

    // let result = number1 + number2;
    // return result;
    return number1 + number2
}

const result = addTwoNumbers(3, 5) 
// console.log("Result ", result) // here prints 8


function loginUserMessage(username) {
    if(username === undefined ) { // or !username
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("amit"))
// console.log(loginUserMessage()) // undefined


function calculateCartPrice(val1, val2, ...num1) { // rest parameter
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "amit",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

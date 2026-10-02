// // var c = 300
// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("Inner ",a);
    
// }

// console.log(a);
// // console.log(b);
// console.log(c);


function one() {
    const username = "Amit"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "amit"
    if (username === "amit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++ Interesting (Hoisting) +++++++++++++++++++

// Basic function
console.log(addOne(5)) // doesn't give error

function addOne(num) {
    return num + 1
}



// Expression
addTwo(5) // Error

const addTwo = function(num) {
    return num + 2
}

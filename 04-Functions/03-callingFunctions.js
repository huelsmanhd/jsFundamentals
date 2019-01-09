function hi() {
    console.log('HI');
    return "Hey";
}

//hi;
//hi();
console.log(hi);
console.log(hi());

//  Challenge: Create a function that lists numbers 1-10 when invoked
// invoked = calling a function
function numbers() {
    for (var x = 1; x <= 10; x++) {
    console.log(x);
    }
    return "Done!"
}
console.log(numbers());

// Challenge

let strArray = ['This', 'is', 'really', 'cool?'];

 function wrd() {
    for(item of strArray) {
    console.log(item);
    }
}
wrd(); //does not need to be console.log because does not have a return value, only invoke
// nickname: FAT ARROW FUNCTIONS
// Regular function
function coffee() {
    console.log('Coffee is life!');
}

// Fat Arrow Function
let coffee = () => {
    console.log("Coffee is dank");
}

coffee();

// Multiple Parameters
var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 35);

// Fat Arrow functions don't require multiple lines or curly brackets, referred to as concise
let fatArrows = (x) => console.log(x);

fatArrows("This is a function, nothing to see");

// Multiple Parameters in Fat Arrow Functions
let namingMachine = (fname, lname) => (fname, lname);

console.log(namingMachine('Tom', 'Hiddleston'));

/* FUNCTIONCEPTION
create two functions
first - take a string parameter, and capitalize it
first - return the string;

Second - string as a parameter, and then lowercase;
console.log result

Take the return from the first , and then pass it into the second function.*/

let score = 'Duuuuuuuuude';

function upperCase(big) {
    return big.toUpperCase();
}

function  lowerCase(small) {
    return small.toLowerCase();
}

console.log( lowerCase( upperCase(score)))
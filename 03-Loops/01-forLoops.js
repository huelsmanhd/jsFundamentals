// For Loops

for (let i = 0; i  < 10; i++) {
    console.log(i)
}

for (let i = 0; i <= 20; i+=2) {
    console.log(i)
}

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

for (let i = 0; i >= -24; i-=2) {
    console.log(i)
}

let str = 'Henry';

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i)) // is grabbing character instead of separating string
}

let str = 'Henry'

for (let i = 0; i < str.length; i++) {
    console.log(str[i]) // str[] is more efficient than str.charAt()
}

// Make a for loop that adds the numbers 1-50 together (answer = 1275)
let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i 
}

console.log(sum); // Outside of for loop to show only final value, rather than each step inside of loop
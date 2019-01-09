// Ternaries

let x  = 6

if (x > 0) {
    console.log('yes')
} else {
    console.log('no')
}

(x > 0) ? console.log('yes') : console.log('no')  //Ternary

let age = 40
let young = 'Sorry, you\'re too young to  do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!';

(age >= 25) ? console.log(vote, drink, rent) : (age >= 21) ? console.log(vote, drink) : (age >= 18) ? console.log(vote) : console.log(young);
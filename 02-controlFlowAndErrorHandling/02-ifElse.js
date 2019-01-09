// If Else Statements

let money = false

if (money) {
    console.log('Starbucks')
} else {
    console.log('make coffee')
}

let winbet = false

if (winbet) {
    console.log('make bank')
} else {
    console.log('go broke')
}

let weather = 75

if (weather < 70) {
    console.log('wear a jacket')
} else {
    console.log('no jacket needed')
}

let name = 'Henry'
if  (name) {
    console.log('Hello, my name is', name)
    console.log('Hello, my name is ' + name)
    console.log(`Hello, my name is ${name}`)
} else {
    console.log('Hello, what is your name?')
}

// let str = 'harRy'

// let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
// console.log(newStr)

let str = 'harRy'
if (str[0] === str[0].toUpperCase())  {
    let firstLetter = str[0] + str.slice(1).toLowerCase()
    console.log(firstLetter)
} else {
    let otherLetters= str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    console.log(otherLetters)
}

// Else If Statements

let weather = 40

if (weather > 70) {
    console.log('Wear a tshirt')
} else if (weather <= 70 && weather > 50) {
    console.log('Wear a light jacket')
} else {
    console.log('stay inside')
}

let age = 135
let young = 'Sorry, you\'re too young to  do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'

if (age >=  0 && age < 120) {
    if (age >= 25) {
        console.log(vote, drink, rent)
    } else if (age >= 21) {
        console.log(vote, drink)
    } else if (age >= 18) {
        console.log(vote)
    } else if (age < 17) {
        console.log(young)
    } 
} else {
    console.log('Pick a human age please')
}
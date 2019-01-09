// FOR EACH LOOPS is a method that performs a function for each item in an array

let array = ['1', '2', '3', '4'];

array.forEach(function(value, index, array) {
    console.log(value, index, array)
})

let pies = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];

pies.forEach(function(pie, index, pies) {
    console.log(pie, index, pies)
})
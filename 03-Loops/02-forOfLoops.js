// FOR OF LOOPS (used to value iterabale objects)

let student = { name: "Harry", awesome: true, degree: "Javascript", week: 1 };
for (item of student) {
    console.log(item)
}

// Does not work with For In Loop because student is not an iterable array

let pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];

for ( pie of pieArray) {
    console.log(pie, 'pie is dank');
}


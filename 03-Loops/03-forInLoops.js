// For In Loops (used to value inumerable objects)

let student = { name: "Harry", awesome: true, degree: "Javascript", week: 1 };

for (item in student) {
    console.log(item); //accesses keys
    console.log(student[item]); //acesses key values
}

let pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];

for ( pie in pieArray) {
    console.log(pieArray[pie]);
}


// Use For In Loop to capitalize first letter of sutdentName 
let studentName = 'jack';
let CapName;
for (let x in studentName) {
    if (x == 0) {
        capName = studentName[x].toUpperCase();
    } else {
        capName += studentName[x].toLowerCase();
    }
}
console.log(capName)
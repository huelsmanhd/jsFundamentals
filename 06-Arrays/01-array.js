/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1', 'item2', 'item3'];
                  (1)     (2)      (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

let list = ['orange', true, 20];

console.log(list[1]);

let students = ['Tim', 'John', 'Julie', 'Ellie', 21, true, ['Evan', 'Dave', 'Joe']]

console.log(typeof students);
console.log(students instanceof Array);
console.log(students[6][1]);

let name = students[6][2];
console.log(`Hello ${name}, you look nice today.`);

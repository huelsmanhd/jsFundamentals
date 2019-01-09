// PARAMETERS are like empty storage boxes where we can name and rename items

function pet(animal) {
    console.log(`I have a pet ${animal}.`);
}

pet('marmoset'); //whatever is inserted into invocation will retrun in ${animal} line

// Challenge: Write a function that takes two Parameters
function name( lastname, firstname ) {
    let fullname = lastname + ', ' + firstname;
    console.log(fullname);
    //return(fullname); not neccesary because already console.log
}

name('Huelsman', 'Henry');


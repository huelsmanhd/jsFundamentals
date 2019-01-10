let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.forEach(f => {console.log(f); })

food.forEach((food, numnber) => {console.log(number)
    console.log(food)
})

// Challenge
let movies = ['The Shining', 'Terminator', 'Pretty Woman', 'Airplane', 'Lethal Weapon'];

movies.forEach(m => {console.log(m)});
movies.push('Naked Gun');
movies.splice(2,2, 'Sharknado V');
console.log(movies) //can also use movies.forEach(m=>{console.log(m)});
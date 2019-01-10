let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (f in food) {
    //console.log(food[f])
}

food.push('Pizza');
food.splice(1,0, 'Bananas');
food.splice(4,1 )
console.log(food) //console.log moved outside of forInLoop to change scope
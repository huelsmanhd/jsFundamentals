// Switch Case

let friend = 'Zach'; //input determines which case is selected

switch (friend) { //can input .UpperCase() or .LowerCase() to default any input
    case 'Zach':
        console.log('Let\'s go play ultimate!')
        break; //breaks out of case
    case 'Ing':
        console.log('So when are  we going to Belgium?')
        break;
    case 'Adam':
        console.log('I have baby stuff for you to borrow.')
        break;
    default:
        console.log(`You, ${friend}, are not my friend.`)
}

let dessert = 'Cookie';

switch (dessert.toLowerCase()) {
    case 'pie':
        console.log('Pie, pie, me oh my!')
        break;
    case 'cake':
        console.log('Cake is great!')
        break;
    case 'ice cream':
        console.log('I scream for ice cream!')
        break;
    case 'cookie':
        console.log('COOOOOOKIIIEEEE *cookie monster voice*')
        break;
    case 'sundae':
        console.log('Every day and twice on sundae!')
        break;
    default:
        console.log('Not on the menu.')
}

let range = 4;

switch (true) {
    case range < 18 && range >-40:
        console.log('worked')
        break;
    case range <= 4 || range > 30:
        console.log('also  worked')
        break;
    case range !== 11 && range > 0:
        console.log('bingo')
        break;
    default:
        console.log('no')
}
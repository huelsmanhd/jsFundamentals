/*
What is scope?

JS has both LOCAL and GLOBAL scope

Local = like Indianapolis
Global = like Earth

Can still be on the world when you are in Indy, but you are not necessarily in Indy when you are on the planet
*/

var x = 12; //global

function scope() { //local
    var x = 33
    console.log(x);
}

scope();
console.log(x);

/*
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? Well, check out the below:
*/

var y = 12;

function varlet() {
    var  y = 33;
    if (true) {
        let y = 45;
        console.log(y);
    }
    console.log(y);
}
    varlet();
    console.log(y);

/*
Why is this happening?

This is a question of BLOCK SCOPE.  

What is block scope?  A BLOCK, simply put, is the part between {} in a function or conditional; inside a block is local scope.

Var does NOT have block scope built in.  It is not locked into only operating within those curly brackets, 

and can therefore bleed into a parent scope.  

Notice, here, we are nested within two blocks: varTest() or letTest() and the if statement.  

If var is run, it can bleed from the if block into the varTest() block.  In effect, we cannot be too sure where var has access--elusive. 

Let DOES have block scope.  It is locked into which block it is located and cannot escape from those curly brackets.  This is particularly helpful when you want to run the variable only in that particular block without the danger of having it affect any other code.

Let's try with const:
*/

function constTest() {
    const  scope = 1;
    if (true) {
        const  scope = 2;
        console.log(scope);
        }
    console.log(scope);
    }


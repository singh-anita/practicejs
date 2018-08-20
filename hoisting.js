//function scope
/*function i()
{
    console.log(t);//when trying to access a previously undeclared variable.
}
i();//ReferenceError: t is not defined*/

// The variable declaration, var y whose scope is the function x(), is hoisted to the top of the function.

// To avoid this pitfall, we would make sure to declare and initialise the variable before we use it:
// x()//TypeError: x is not a function
var x = function(){
    console.log(y);//undefined
   var y = 1;
}
x();
var x = function(){
    var y; //declaration hoisted at top like this EXPLAIN OF ABOVE CODE X()
    console.log(y);//undefined
    y = 1;
}
x();
var c = 2;
var d = function(){
    console.log(c);//undefined or if this statemnt only and ahead not declared or defined that variable then i vl give global var
    var c = 1;
     console.log(c);
}
d ();

/**Because of this, we can use variables before we declare them. However, we have to be careful because the hoisted variable is initialised with a value of undefined. 
 * The best option would be to declare and initialise our variable before use. */
///FOR ES5 USING STRICT MODE
// 'use strict';

// console.log(hoist); // Output: ReferenceError: hoist is not defined
// hoist = 'Hoisted'; 

// variables declared with the keyword let are block scoped and not function scoped.
// console.log(hoist); // Output: ReferenceError: hoist is not defined 
// let hoist = 'The variable has been hoisted.';

let hoist;
console.log("hoist",hoist); // Output: undefined
hoist = 'Hoisted';

//var 
hois = 'Hoisted';
console.log("hois",hois); // Output: Hoisted
var hois;


// console.log(PI);// ReferenceError: PI is not defined
// const PI = 'The variable has been hoisted.';

/*const PI;
console.log(PI); // Ouput: SyntaxError: Missing initializer in const declaration
PI=3.142;*/

// Function declarations

fruit();
function fruit(){
    console.log("I like fruits ")
}

//  the combination of a function declaration and expression.
/*(pizzaOd();
var pizzaOd =function pizzaOrder(){
    console.log("I like pizza ")
}*/


// Order of precedence
 // Both the variable and the function are named  multiplier
/*var multiplier = 2;
function multiplier(num){
return num *2;
}
// console.log(multiplier(5))
console.log(typeof multiplier); // Output: number -->
But in this example, the variable assignment overrides the function declaration*/


var multiplier;
function multiplier(num){
return num *2;
}
console.log(typeof multiplier);// The function declaration overrides the variable name

// Class declarations ReferenceError: Movies is not defined
var hollywoodMovies =new Movies();
hollywoodMovies.time=11;
console.log(hollywoodMovies);//ReferenceError: Movies is not defined

class Movies {
    constructor(time) {
      this.time = time;
    }
  }


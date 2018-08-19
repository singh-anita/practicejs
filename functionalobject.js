var pizza = function () {
    this.crust = 'thin';
    this.toppings = 3;
    this.hasBaccon = true;
};
var pizzaA = new pizza();
var pizzaB = new pizza();
// console.log(pizzaA)
// console.log(pizzaB)
// pizzaB.crust = 'medium';
// console.log(pizzaB)
// console.log(pizzaB instanceof pizza)
// console.log(pizzaB.constructor)


// using var unstead of this var is private and this is public

var pizza = function () {
    var crust = 'thin';
    var toppings = 3;
    this.hasBaccon = true;
   /* this.getBaccon = function () {
        return this.hasBaccon;
    }

    this.getCrust = function () {
        return crust;
    }*/
    var getToppings = function(){
        return toppings;
    }
    var tmp ={};
    tmp.getToppings = getToppings;
    return tmp;
};
var pizzaA = new pizza();
console.log(pizzaA.crust); // pizza {hasBaccon: true} 

// var pizzaB =new pizza();
// console.log(pizzaA); // pizza {hasBaccon: true} 
// console.log(pizzaA.getBaccon());
// // VM102:11 pizza {hasBaccon: true, getBaccon: ƒ}getBaccon: ƒ ()arguments: nullcaller: nulllength: 0name: ""prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM102:5[[Scopes]]: Scopes[1]hasBaccon: true__proto__: Object
// VM102:11 true
// console.log(pizzaA.getCrust());
// console.log(pizzaA.getToppings());//is not a function

console.log(pizzaA); 
console.log(pizzaA.getToppings())

var name = 'anita';//the global variable

function practice() {
    var name = "Jack";// Here, the name variable is local and it takes precedence over the same name variable in the global scope
console.log(name)
}
console.log(name)
practice();

// No Block-Level Scope
if(name)
{
    var name = "Jsdk";
    console.log(name)
}
console.log(name);

var name = "Michael Jackson";

function showCelebrityName () {
	console.log ("global",name);
}

function showOrdinaryPersonName () {	
	name = "Johnny Evers";
	console.log (name);
}

showCelebrityName () 
showOrdinaryPersonName ();
showCelebrityName (); 

function showOrdinaryPersonName () {	
	var name = "sapana singh"; //Now sname is always a local variable and it will not overwrite the global variable
	console.log ("local",name);
}
showOrdinaryPersonName ();

var name = 'anita';//the global variable

function practice() {
    var name = "Jack";// Here, the name variable is local and it takes precedence over the same name variable in the global scope
console.log(name)
}
console.log(name)
practice();

this.name = 'anita';
function practicecheckthis() {
    this.name = "Jack";
console.log(this.name)
console.log("variable name of funtion scope",this.name)
}
practicecheckthis();
console.log(this.name)

//GLOBAL VARIABLE
// To declare a global variable, you could do any of the following:
var myName = "krish";
console.log(myName)
myName = "ram";
console.log(myName);
// or 
// var color;//undefined
// console.log(color);
// color;//throw error it is not defined
color ="DFG";//if only this statemt and even if var not used then it vl print value
console.log(color);
// console.log(global.color);
// console.log("color" in global);

function buyPizza()
{
    price = "200 Rupees";//global var coz it was not declared with the var keyword inside this function
    console.log(price);// 
}
buyPizza();
console.log(price);// price is in the global context, so it is available here, too or if it try to acces local variable of function and global variable not declared then it will throe error

var lastName ="singh";
// JavaScript does not have block-level scope so Both lastName variables are in the global scope
{
    lastName = "Dsouza";
}

console.log(lastName);

// for (var i = 1; i <= 10; i++) {
// 	console.log (i); 
// };

// The variable i is a global variable and it is accessible in the following function with the last value it was assigned above 
function cNumber () {
console.log(i);
}

// The variable i  in the cNumber function below is the global variable i that was changed in the for loop above. Its last value was 11, set just before the for loop exited:
// cNumber();  // 11

 // The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj

 var highScore = 200;
var constantScore = 2;
var myObj = {
    highScore : 40,
    constantScore : 8,
    calculateScore : function(){
        setTimeout(function(){
       console.log(constantScore);
    },3000);
  }
}


// console.log(highScore)
// console.log(myObj.highScore)
myObj.calculateScore();


// function myObj1(highvalue,constvalue)
// {
//     this.highScore = highvalue;
//     this.constantScore = constvalue;
//     this.calculateScore = function(){
//         setTimeout(function(){
//        console.log(this.constantScore);
//     },3000);
// }
// }
// var aObj = new myObj1(40,8);
// console.log(aObj.highScore);
// console.log(aObj.calculateScore());
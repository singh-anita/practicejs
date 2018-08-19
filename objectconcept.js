var ageGroup = {
    30: "Children",
    100: "Very Old"
};
// console.log(ageGroup.30) // This will throw an error
for (let i = 0; i < ageGroup.length; i++)
    console.log(ageGroup["i"]);
console.log(ageGroup["30"]); // Children

var person = "ani";
var anotherPerson = person; //reference data type’s value is stored as a reference
person = "Bryant"; // value of person changed
console.log("primitive type variable value", person);
console.log("reference data type", anotherPerson);


var zperson = {};
console.log(zperson)
let personObj = {
    name: "elon"
};
var otherPerson = personObj;
personObj.name = "Bryant";

console.log(otherPerson.name); // Bryant
console.log(personObj.name); // Bryant
//1 Creating Objects
//1.1 Object Literals
var myBooks = {};

// This is an object with 4 items, again using object literal
var mango = {
    color: "yellow",
    shape: "round",
    sweetness: 8,

    howSweetAmI: function () {
        return this.sweetness;
    }
}
console.log(mango.howSweetAmI())

console.log(mango.shape)
console.log(mango['shape'])
var mangoColor = 'color';
console.log(mango[mangoColor])

// Accessing and Enumerating Properties on Objects
for (var eachItem in mango) {
    console.log(eachItem)
}


function HigherLearning() {
    this.educationLevel = "University";
}
var mango = new HigherLearning()
console.log(mango)
mango.schoolName = "MIT";
console.log(mango);

for (let eachItem in mango) {
    console.log(eachItem)
}

// mango.schoolName = "MIT";
delete mango.schoolName;
console.log(delete mango.toString())

console.log(mango.schoolName)

HigherLearning.prototype.educationLevel2 = "University 2";

console.log(mango.hasOwnProperty("educationLevel2")); false
console.log(mango.educationLevel2); // University 2

delete mango.educationLevel2;
console.log(mango.educationLevel2);
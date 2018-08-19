let fruits = ["apple", "apricot"];//Create an Array
console.log(fruits.length);
console.log(fruits[0]);
// console.log(fruits.0);
console.log(fruits[fruits.length - 1]); //Access (index into) an Array item
// Loop over an Array
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
fruits.forEach(function(item) {
  console.log(item);
});
fruits.push("mango", "papaya");
//   console.log(fruits);

var last = fruits.pop();
//   console.log(fruits);

var first = fruits.shift(); //   Remove from the front of an Array
console.log(first);
// console.log(fruits);
var newLength = fruits.unshift("Strawberry");
console.log(newLength); //method adds one or more elements to the beginning of an array and returns the new length of the array.
let position = fruits.indexOf("mango"); //Find the index of an item in the Array
console.log(position);
fruits.push("apple");

//   Remove an item by index position
var newLength = fruits.unshift("Svhgjh");
// console.log(fruits)
var removedItem = fruits.splice(0,1,'kiwi');// Remove 1 elements from index0, and insert "kiwi"
// console.log(fruits);
// splice method('position index of array','delete item count','watever u wanna insert that string or number')
fruits.push("mrferfwdango", "fsfsd");

// Remove items from an index position
var removedItemfromanindex  = fruits.splice(5,2);
console.log(fruits);

// Copy an Array
var shallowCopy = fruits.slice()
console.log(shallowCopy);

console.log(Object.keys(fruits)); 
// Iterating over an array
for(let i =0; i<=fruits.length-1;i++)
{
    console.log(fruits[i])
}

// sectionShortening an array
var numbers = [1, 2, 3, 4, 5];
if (numbers.length > 3) {
    numbers.length = 3;
  }
  console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
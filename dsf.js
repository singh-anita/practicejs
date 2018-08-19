// This is an object with 4 items, again using object literal
var mango = {
    color: "yellow",
    shape: "round",
    sweetness: 8,

    howSweetAmI: function () {
        return this.sweetness;
    }
}

console.log(mango)

function HigherLearning() {
    this.educationLevel = "University";
}

var mango = new HigherLearning()
console.log(mango)

mango.shape = 'square';

console.log(mango.shape)
console.log(mango)

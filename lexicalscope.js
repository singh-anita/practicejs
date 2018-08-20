var a=function(){
    var b= 1;
    // console.log(y)//1
if(true){
    var b = 2;
}
if(true){
    var b = 3;
}
console.log(b)//1
}
// console.log(b);
/*Since it was declared, it is confined to the a() function scope.
We can't print it out outside the confines of the a() function.
Output: ReferenceError: b is not defined*/

a();

// Lexical Scoping  with function scope--> means thing define outside available inside
var x = function(){
    var y= 1;
    // console.log(y)//1
    var z = function(){
            console.log(y)
    }
    z();
}
    // console.log(y);//undefined
x();//1

var outerFunction = function(){
        var e = 4;
    // console.log(e)
    // console.log(f)//ReferenceError: f is not defined
    var innerFunction = function()
    {
            var f = 5;
            console.log(e);
            if(true){
                console.log(f)
            }
          
    }
    return innerFunction();
}
outerFunction ();


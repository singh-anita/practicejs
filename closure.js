function showName(firstName,lastName)
{
    var intro = "first intro";
     function makeFullName(){
        return intro +" " + firstName + "" +lastName;
    }
    return makeFullName()
}
console.log(showName('anita','singh'));
// console.dir(showName());

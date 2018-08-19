var name = 'anita';//the global variable

function practice() {
    var name = "Jack";
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
var sname = "Michael Jackson";

function showCelebrityName () {
	console.log (sname);
}

function showOrdinaryPersonName () {	
	sname = "Johnny Evers";
	console.log (sname);
}
showCelebrityName () 
showOrdinaryPersonName ();
showCelebrityName (); 
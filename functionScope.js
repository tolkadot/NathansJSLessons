

//Define a function named callFunc that takes one argument, 
//a function f. It should return an 
//
//array containing the values f(0), f(0), f(1), f(1). You can only call f twice.
//@tolkadot dbryant 22aug15

var count = 0;
var f = function (x) {
    count += 1;
    return x + 2;
};
console.log(f(0));

var callFunc = function (f) {

var foo = f(0);
var bar = f(1);
var array = [foo, foo, bar, bar];
return array;


    
};

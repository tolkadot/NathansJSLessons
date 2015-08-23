//Define a function named generate that takes one argument, a function f. 
//It should return an array that consists of the function f and another function that doubles its input.
//@tolkadot dbryant 23aug15

var generate = function (f) {
    var newFunction = function(x) {
    return x*2;
    }
    var array = [f, newFunction];
    return array;
};

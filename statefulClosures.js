

//Define a function named makeAccumulator that takes no arguments. 
//It should create and return a function that takes one argument and 
//returns a running total of all the arguments it has seen. E.g if f is 
//the function returned by makeAccumulator, the first time you call f(3) 
//it should return 3, then if you call f(2) is should return 5.


var makeAccumulator = function () {
    var count = 0;
    
    var totalArguments = function(x){
        
        count = count + x;
        return count;
        
    }
    return totalArguments;
    
};
totalArguments(3);

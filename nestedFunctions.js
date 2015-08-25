
//Define a function named genesis that takes two arguments x and y. 
//It should return a function that always returns x + y.

var genesis = function (x, y) {
    
    var sum = function(){
        
        return x+y; 
        
        };
        
    return sum;
};

console.log(genesis(1, 2));



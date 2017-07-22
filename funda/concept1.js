



/**
 * First class functions : Functions which can be used like Strings, Numbers etc (i.e. pass them around, 
 *                         set variables equal to them, put them in arrays  & more)
 * 
 * Expressions :  A block of code that returns a value. Function expressions are possible in javascript as 
 *                they are first class.
 */



// Function statement
function greet() {
    console.log('Hello!');
}
greet();

// Functions as First Class functions 
 function logGreeting (fn) {
    fn();
};
logGreeting(greet);

// Function expressions
var greetMe = function(){
    console.log('Greetings!')
}
greetMe();

// Function expressions are first class
logGreeting(greetMe);


//Function expressions on the fly
logGreeting(function(){
    console.log('Exressions on the fly!!');
});

// IIFE

// Functions stored in Arrays


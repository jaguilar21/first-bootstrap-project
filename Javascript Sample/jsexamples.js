

//*******************  FOR LOOP   */
// useage - when you know ahead of time how many iterations you will be doing

// for (initial value; looping condition; increment value)
var loops = 3;
for (let i = 0; i < loops; i++) {
    console.log(i);
}

// ************** WHILE LOOP *******************
// usage - when we want to repeat our code DRY but don't know how many times we need to
// be sure to include a way for the program to exit the condition - the dreaded INFINITE LOOP

var whileLoop = 0;
while (whileLoop <= 10) {
    console.log("Loop number is " + whileLoop);
    whileLoop++;
}
console.log("Im finished looping");

// ************************  DO WHILE *******
// useage - a while loop that MUST at least loop once - the check comes after the first iteration

var untilLoop = 1;
do {
    console.log("Do Until Loop:  number is " + untilLoop);
    untilLoop++;

} while (untilLoop <= 10);




// **************** Arrays  ******************
// *******  Arrays are obects, they have properties .... and methods,
//https://www.w3schools.com/jsref/jsref_obj_array.asp
//

// create an array
const superheros = ["Superman", "Aquaman", "Wonder Woman"]

//to get to an individual value - use the index number (starting at zero)
console.log(superheros[0])
console.log(superheros[1])
console.log(superheros[2])

//Loop through the arrays

for (let i = 0; i < superheros.length; i++) {
    console.log("From the Loop" + superheros[i]);
}


for (let hero of superheros) {
    console.log(hero);
}

//******************  FUNCTIONS - reusable code, code that can called from anywhere in the program
// usually does ONE general task
//function declaration 
function displayName();
{
    console.log("Greetings");
}
// a function must be called in order for the lines of code to be executed
displayName();

//******* FUNCTIONS CAN RECEIVE DATA */

//a function needs to  exist independently of code outside of the function. So if it needs
// data, we don't want to depend on the data existing outside of the function. SO, we SEND the function the data that it needs. 
// a PARAMETER is a variable that receives the data we send to the function, stores the data in a LOCAL variable for the function to use. The data is discarded when the function is finsished.

function printPersonalGreeting(aName) {
    //aName is the parameter. All that means is it is a variable that has been declared in the parens instead of declaring a varialbe like this: 
    // var aName;
    //our function can use that variable within the function block (inside the curly braces)
    console.log(aName);

}
//to send data to the PARAMETER, in this case aName we put the data in the parens when we call the function
printPersonalGreeting("Kirsten");  // We call the data we are sending, the argument

// *****  FUNCTIONS can send data back to the caller - the line that called the function

// Since the data in the parameters are lost when the function has completed running, we
// can send data back to the line where the function was called.
// we use the keyword "return" to send data back. 
function addNames(firstName, lastName) {
    return `Aloha ${firstName} ${lastName}! Welcome! `
}
//when we call a function that is returning data, we need to have a variable that
// will receive the data that is being returned
let greet = addNames("Kirsten", "Markley");
// greet will contain the string "Aloha Kirsten Markley! Welcome!" when this line has finished executing 

// ****** Function example from slide
function hasFoo(word) {
    if (word.includes("foo")) {
        return true;
    }
    return false
}
console.log(hasFoo("abcdfoo"));
console.log(hasFoo("abcdefg"));

// SCOPE OF PARAMETERS
function inchesToCM(inches) {
    return inches * 2.54;
}
const lengthInches = 3;
const lengthCm = inchesToCM(lengthInches);








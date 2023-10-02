/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
//Using function expressions, repeat the items in Step 2 with new functions 
//named subtract and subtractNumbers and HTML form controls with IDs of 
//subtract1, subtract2, subtractNumbers, and difference.
const subtract = function(number1, number2) {return number1 - number2};
const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
//Using arrow functions, repeat the items in Step 2 with arrow functions 
//named multiply and multiplyNumbers and HTML form controls with IDs of 
//factor1, factor2, multiplyNumbers, and product.
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let f1 = Number(document.querySelector('#factor1').value);
    let f2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(f1, f2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
//Using any combination of function declaration types, repeat the items in 
//Step 2 with new functions named divide and divideNumbers and HTML form 
//controls with IDs of dividend, divisor, divideNumbers, and quotient.
function divide (divisor, dividend) {
    return divisor / dividend;
}
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
    //document.querySelector('#quotient').value = "killing me";
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
//Declare and instantiate a variable of to store the current date.
const date = new Date();
//Declare a variable to hold the current year.
let year;
//Using the variable declared in number 1, call the built-in getFullYear() 
//method/function and assign it to the variable declared in 2.
year = date.getFullYear();
//Assign the current year variable to an HTML form element with an ID of year.
document.querySelector('#year').text = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// #8 Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//Assign the value of the array variable to the HTML element with an ID of array.
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
//Use the filter() array method to find all of the odd numbers of the array 
//variable and assign the result to the HTML element with an ID of odds
//Hint: Use the modulus operator % to find the remainder of dividing a number 
//by 2. If the remainder is 1, the number is odd. If the remainder is 0, the number is even.
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
//Use the filter() array method to find all of the even numbers of the array 
//variable and assign the result to the HTML element with an ID of evens.
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
//Use the reduce() array method to sum the array variable elements and assign the result to 
//the HTML element with an ID of sumOfArray
 let reducedArray = numbersArray.reduce((sum, number) => sum + number);
 document.querySelector('#sumOfArray').innerHTML = reducedArray;

/* Output Multiplied by 2 Array */
//Use the map() array method to multiple each element in the array variable by 2 and assign the 
//result to the HTML element with an ID of multiplied.
let multpliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multpliedArray;

/* Output Sum of Multiplied by 2 Array */
//Use the map() and reduce() array methods to sum the array elements after multiplying each element 
//by two. Assign the result to the HTML element with an ID of sumOfMultiplied.
document.querySelector('#sumOfMultiplied').innerHTML = multpliedArray.reduce((sum, number) => sum + number);

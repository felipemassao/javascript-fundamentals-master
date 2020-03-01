//! Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arrEx1 = [ 2, 4, 6, 7, 9, 12 ];

// code here

const add2 = (arr) => {
	return arr.map((value) => value + 2);
};

// ######################################### //

//! Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

const checkSum = (arr) => {
	const sum = arr.reduce((acc, value) => (acc += value));
	return sum % 2 === 0 ? 'even' : 'odd';
};

// ######################################### //

//! Given an array of numbers, write a function evenNumbers that returns a new array only with the even numbers of the original array.

const arrEx3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const evenNumbers = (arr) => {
	return arr.filter((value) => value % 2 === 0);
};

// ######################################### //

//! Given an array of letters, write a function sortLetters that returns a new array of letters in alphabetical order.

const arrEx4 = [ 'a', 'c', 'g', 'r', 'w', 'e', 's', 'l', 'z', 'q', 'b', 'd' ];

const sortLetters = (arr) => {
	return arr.sort((a, b) => a.localeCompare(b));
};

// ######################################### //

//! Make a function that takes a number and returns that number multiplied by 5.

// code here
const multiplyBy5 = (num) => {
	return num * 5;
};
// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements of an array multiplied by 5.

// code here

const multiplyArrayBy5 = (arr) => {
	arr.forEach((value) => console.log(multiplyBy5(value)));
};
// ######################################### //

//! Make a function that takes a letter and returns it uppercase

// code here

const letterToUppercase = (letter) => {
	return letter.toUpperCase();
};
// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements upper case of an array.

const arrayToUppercase = (arr) => {
	arr.forEach((letter) => console.log(letterToUppercase(letter)));
};
// code here

// ######################################### //

//! Create a function that takes a number and returns true if the number is odd and false if the number is even

// code here

const isOdd = (num) => {
	return num % 2 !== 0;
};
// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that return only the odd numbers.

// code here
const onlyOddNumbersIn = (arr) => {
	return arr.filter((value) => isOdd(value));
};
// ######################################### //

//! Using any array method, make a loop that return the result of multiplying all the elements.

// code here

const multiplyAllElements = (arr) => {
	return arr.reduce((acc, value) => (acc *= value));
};
// ######################################### //

"use strict";
// Equality and Inequality Test 1
console.log("Equality test with string:", "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Equality test with string:", "Apple" != "orange");
// Tests using the lower case function
console.log("lower case function test: ", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality
console.log("Equality test with number:", 26 === 26);
// Numerical tests involving  inequality,
console.log("InEquality test with number: ", 26 != 35);
// greater than test ,
console.log("Greater than test: ", 10 > 5);
// less than test ,
console.log("less than test: ", 10 < 15);
// greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <= 10);
// test using "and"  operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
// test using  "or" operator
console.log("or operator test: ", 5 === 5 || false);
// Test whether an item is in a array
const fruit = ['banana', 'mango', 'amrood'];
console.log('test "banana" in the array: ', fruit.includes("banana"));
// Test whether an item is not in a array
console.log('testing "apple" is not in array: ', !fruit.includes('apple'));

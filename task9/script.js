1. Print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


2. Print the even numbers from 1 to 25.


for (let i = 1; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



Print the multiples of 5 in table format i.e. (5 x 1 = 5).



for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}



Write a loop that takes a string(your name) as input and returns the reversed string.


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let inputString = 'Hemasonica';
let reversedString = reverseString(inputString);

console.log(reversedString);


Given an array of numbers[1, 2, 3, 4, 5], write a loop to calculate the sum of all the numbe



let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log('Sum of all numbers:', sum);






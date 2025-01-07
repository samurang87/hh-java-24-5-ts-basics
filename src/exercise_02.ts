/*
Step 1: Create an array of numbers. Use the '.map' function to double all the
numbers in the array.

Step 2: Create an array of words. Use the '.filter' function to select only the words
that are longer than 5 letters.

Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of
all the numbers in the array.

Step 4: Create an array of numbers. Use the '.some' function to check if at least one
number is greater than 10.*/

let numbers: number[] = [1, 2, 3, 4, 5];
let doubledNumbers: number[] = numbers.map((num: number) => num * 2);
console.log("Numbers: ", numbers);
console.log("Doubled Numbers: ", doubledNumbers);

let words: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
let longWords: string[] = words.filter((word: string) => word.length > 5);
console.log("Words: ", words);
console.log("Long Words: ", longWords);

let sumNumbers: number = numbers.reduce((sum: number, num:number) => sum + num);
console.log("Numbers: ", numbers);
console.log("Sum of Numbers: ", sumNumbers);

let atLeastOneGreaterThan10: boolean = numbers.some((num: number) => num > 10);
console.log("Numbers: ", numbers);
console.log("At least one number greater than 10: ", atLeastOneGreaterThan10);


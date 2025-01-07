/*
Use only array functions for the following tasks.
Take this list of numbers:

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

Sort these numbers in descending order.
Square these numbers.
Remove the lowest two numbers and the highest 4 numbers from the list.
Remove all numbers that are divisible by 4.
Add up all the numbers.*/

const list: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
console.log("Original list", list);

const sortedList = list.sort((a, b) => b - a);
console.log("Sorted in descending order", sortedList);

const squaredList: number[] = sortedList.map((num: number) => num * num);
console.log("Squares of all elements", squaredList);

const trimmedList: number[] = squaredList.slice(2, squaredList.length - 4);
console.log("Trimmed list", trimmedList);

const notDivisibleBy4: number[] = trimmedList.filter((num:number) => num % 4 !== 0);
console.log("Not divisible by 4", notDivisibleBy4);

const finalResult = notDivisibleBy4.reduce((sum: number, num:number) => sum + num);
console.log("Sum of all elements", finalResult);


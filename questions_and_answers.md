# MCQ TEST

1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer : b , => JavaScript is case-sensitive, so greetign is not the same as greeting leading to a ReferenceError because greetign was never declared or defined.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer : A => In the sum function you are attempting to add two values a and b. However when you call the function with sum(1, "2"), trying to add an integer (1) and a string ("2"). 
JavaScript will attempt to convert the string to a number when performing addition, but it encounters an issue because the string "2" cannot be directly converted to a number.
As a result, the addition operation results in NaN.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer : A => We start with an array called food containing four emojis , Next, we create an object called info with a property named favoriteFood. Initially, info.favoriteFood which is the first emoji in the food array.
Then, we change info.favoriteFood but this change doesn't affect the original food array. When we print the food array using console.log(food)
4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer : B => In the sayHi function there is a parameter name, which is used to construct the greeting. 
However when you call sayHi() without providing an argument, the name parameter is undefined. Therefore the greeting becomes Hi there undefined and that what will be logged to the console.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer : c => The code counts how many non-zero numbers are in the nums array.
It increments the count variable for each non-zero number.
The final count, which is 3, is printed to the console.

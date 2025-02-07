// What makes a method mutating or non mutating in Javascript?
// Find out whether each of the following methods are mutating or non-mutating.
// How can you verify this?:
// ○ push
// ○ pop
// ○ filter
// ○ find
// ○ sort
// ○ map

const arr = [1, 2, 3, 4, 5, 10];

// 1. push - Mutates the original array
arr.push(12);

// 2. pop - Mutates the original array, pops the last element and return the element
arr.pop();

// 3. filter - Doesn't mutate the array, return array of values if condition is true
arr.filter((element) => element === 1); // returns [1]

// 4. find - Doesn't mutate the array
let found = arr.find(x => x > 2);  // Finds the first element greater than 2
console.log(found);  // Output: 3

// 5. sort - Mutates the original array
arr.sort((a, b) => b - a); // sort's array in descending array

// 6. map - Doesn't mutate the array,
//          return array of values with operation performed on each value (not necessary)
arr.map((element) => element * 1);

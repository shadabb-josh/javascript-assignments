// Question - Use let and const to create arrays and objects. 
// Try modifying, deleting properties within the array or object. 
// What do you expect to happen in both cases? What actually happens in both cases. 
// What is the difference between an object declared as a let or a const variable? 

// USING let
let arr = [1, 2, 3];
let obj = { name: "Shadab", age: 22 };

// Modifying the array
arr.push(4);
console.log(arr); // [1, 2, 3, 4] Allowed

// Deleting an element from the array
arr.pop();
console.log(arr); // [1, 2, 3] Allowed

// Modifying the object
obj.age = 23;
console.log(obj); // { name: "Shadab", age: 23 } Allowed

// Deleting a property from the object
delete obj.age;
console.log(obj); // { name: "Shadab" } Allowed

// Reassigning the array
arr = [10, 20, 30];
console.log(arr); // [10, 20, 30] Allowed

// Reassigning the object
obj = { name: "New" };
console.log(obj); // { name: "New" } Allowed

// USING const
const arr2 = [1, 2, 3];
const obj2 = { name: "Shadab", age: 22 };

// Modifying the array
arr2.push(4);
console.log(arr2); // [1, 2, 3, 4] Allowed

// Deleting an element from the array
arr2.pop();
console.log(arr2); // [1, 2, 3] Allowed

// Modifying the object
obj2.age = 23;
console.log(obj2); // { name: "Shadab", age: 23 } Allowed

// Deleting a property from the object
delete obj2.age;
console.log(obj2); // { name: "Shadab" } Allowed

// Reassigning the array
arr2 = [10, 20, 30]; // TypeError: Assignment to constant variable

// Reassigning the object
obj2 = { name: "New" }; // TypeError: Assignment to constant variable


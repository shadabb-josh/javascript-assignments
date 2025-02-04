// Declare a variable - let a;.
// On another line assign any value you like to a. 
// Log the value of a before and after assignment. 
// Try doing the same with const. 

let a;
console.log(a); // This will be undefined

a = "shadab"
console.log(a); // This will be shadab

// This will not work with const, it should be intialized while defining
const b;  
console.log(b);

// If intialized while defining, still this below line will not work,
// you cannot re-intialized it.
b = "something";
console.assert.log(b);

// Use the typeof operator to find the types of different variables. 
// Specially note what t typeof operator returns for arrays, null values and NaN. 
// How can you find if a variable an array or NaN besides typeof? 

console.log(typeof 42);            //  number 
console.log(typeof "Hello");       //  string 
console.log(typeof true);          //  boolean 
console.log(typeof undefined);     //  undefined
console.log(typeof {});            //  object
console.log(typeof []);            //  object
console.log(typeof null);          //  object
console.log(typeof NaN);           //  number
console.log(typeof function(){});  //  function
    
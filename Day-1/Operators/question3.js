// Question - Do you think JSON.stringify would work for arrays as well? 
// What about nested objects? 
// What happens if we pass numbers, strings, undefined, null to JSON.stringify? 

// 1 - for array
console.log(JSON.stringify([1, 2, 3])); // Output : "[1, 2, 3]"

// 2 - for nested objects
const someObject = {
    name:{
        firstName: 'Shadab',
        lastName: 'Shikalgar'
    }
}

console.log(JSON.stringify(someObject)) // Output: "{ name:{firstName: 'Shadab',lastName: 'Shikalgar'}}"

// 3 - Numbers, String, Undefined, Null, 

console.log(JSON.stringify(10)); // "10"
console.log(JSON.stringify("shadab")); // "shadab"
console.log(JSON.stringify(undefined)); // undefined will be undefined only
console.log(JSON.stringify(null)); // "null"


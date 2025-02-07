// Question - Do you think JSON.stringify would work for arrays as well?
// What about nested objects?
// What happens if we pass numbers, strings, undefined, null to JSON.stringify?

// 1 - for array
console.log(JSON.stringify([1, 2, 3])); // Output : "[1, 2, 3]"

// 2 - for nested objects
const someObject = {
  name: {
    firstName: "Shadab",
    lastName: "Shikalgar",
  },
};

// console.log(JSON.stringify(someObject)); // Output: "{ name:{firstName: 'Shadab',lastName: 'Shikalgar'}}"

// 3 - Numbers, String, Undefined, Null,

// console.log(JSON.stringify(10)); // "10"
// console.log(JSON.stringify("shadab")); // "shadab"
// console.log(JSON.stringify(undefined)); // undefined will be undefined only
// console.log(JSON.stringify(null)); // "null"

// Try deep clone for below object
const originalObject = {
  name: "John Doe",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
  skills: ["JavaScript", "Node.js", "React"],
  experience: [
    { company: "TechCorp", years: 2 },
    { company: "WebSolutions", years: 3 },
  ],
  metadata: new Date(),
  getDetails: function () {
    return `${this.name} from ${this.address.city}`;
  },
};

console.log(originalObject)
// Output
// {
//     name: 'John Doe',
//     age: 25,
//     address: { city: 'New York', state: 'NY', country: 'USA' },
//     skills: [ 'JavaScript', 'Node.js', 'React' ],
//     experience: [
//       { company: 'TechCorp', years: 2 },
//       { company: 'WebSolutions', years: 3 }
//     ],
//     metadata: 2025-02-05T06:24:08.631Z,
//     getDetails: [Function: getDetails]
//   }

const deepCloneObject = JSON.parse(JSON.stringify(originalObject)); // creates Deep Copy
console.log(deepCloneObject)
// {
//     name: 'John Doe',
//     age: 25,
//     address: { city: 'New York', state: 'NY', country: 'USA' },
//     skills: [ 'JavaScript', 'Node.js', 'React' ],
//     experience: [
//       { company: 'TechCorp', years: 2 },
//       { company: 'WebSolutions', years: 3 }
//     ],
//     metadata: '2025-02-05T06:24:08.631Z'
//   }


//let me know your findings
console.log(deepCloneObject.getDetails) // this returns undefined - i
console.log(typeof deepCloneObject.metadata) // metadata: Date Object converted to string

    
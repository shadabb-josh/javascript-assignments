// Question - What happens if you pass a regular/invalid JSON string to JSON.parse? 
// What will happen if such an invalid function runs in the program? 
// Will other parts of the code execute correctly after that? 

let invalidJson = '{"name": "John", age: 30}';
let parsedData = JSON.parse(invalidJson);  // This will throw an error and stop here!
console.log("This will not be logged.");

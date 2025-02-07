// 1. How will you create a new copy of the object 
// below while updating the value of address.details[0] to “5“? 
// { 
//     name:”Harry Potter”, 
//     age: 12, 
//     address: { 
//     details: [“4”, “Privet Drive”], 
//     area:”Little Whinging”, 
//     city: “Surrey”, 
//     state: “England” 
//     } 
// }

const originalObject = {
    name:"Harry Potter", 
    age: 12, 
    address: { 
    details: ["4", "Privet Drive"], 
    area:"Little Whinging", 
    city: "Surrey", 
    state: "England"
    } 
}

const updatedObject = {
    ...originalObject, // destructuring the original object
    address:{
        ...originalObject.address,
        details:["5", originalObject.address.details[1]]
    }
}

console.log(updatedObject)
// 2. Write a function filterObj that will filter out all the keys of a flat object that
//    have objects or arrays using Object.keys and Object.entries.
// Example:
// let obj = {
//              a:”Apple”,
//              b:[“Basketball”,”Baseball”],
//              c: {
//                   call: “cellphone”
//                 },
//              d: “Dog”
//            }

// filterObject(obj) //This should return {a:”Apple”, d:”Dog”}

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

// method that filter out values which are primitive
function filterObj(object) {
  return Object.entries(object).filter(
    ([key, value]) => !Array.isArray(value) && typeof value !== "object"
  );
}

// Empty Object
let filteredObject = {};

// This will hold array
let objectKeyValueArray = filterObj(obj);

// This will add key and value in filteredObject (empty object)
for (let i = 0; i < objectKeyValueArray.length; i++) {
    filteredObject[objectKeyValueArray[i][0]]= objectKeyValueArray[i][1];
}

console.log(filteredObject);
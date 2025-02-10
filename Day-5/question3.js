// // Differences between regular and arrow functions
// 
//   1. `this` Binding:
//      - Regular functions have their own `this`.
//      - Arrow functions inherit `this` from the surrounding scope.
//   
//   2. `arguments` Object:
//      - Regular functions have their own `arguments` object.
//      - Arrow functions do not have `arguments`, they rely on rest parameters.
//   
//   3. `new` Keyword:
//      - Regular functions can be used as constructors.
//      - Arrow functions cannot be used as constructors.
//  
//   4. Explicit `return`:
//      - Regular functions need an explicit `return` statement.
//      - Arrow functions with a single expression implicitly return the result.
//  

// Example:
function regularFunction(a, b) {
    return a + b;
}

const arrowFunction = (a, b) => a + b;

console.log(regularFunction(2, 3)); // 5
console.log(arrowFunction(2, 3)); // 5

// Question 1 - What happens when you add a for loop/while loop/switch case block inside a function 
// and use return instead of break? Do statements after the loop run? 
// What is the return value? Can we pass a return value from within a loop?
// Can you return from inside an if block? What impact does that have?

function someFunction() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            return "Found 3, exiting function"; // exit function here
        }
        console.log(i);
    }
    console.log("This will not be printed");
}

console.log(someFunction()); // Output: "1 2 Found 3, exiting function"

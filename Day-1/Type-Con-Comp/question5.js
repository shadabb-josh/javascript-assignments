// Question - Can you use return instead of break in loops? 

let numbers = [];

for (let i = 1; i <= 25; i++) {
    if (i > 10) break; // Stops only the loop but continue execution
    numbers.push(i);
}

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function fillArray(size) {
    let numbers = [];
    
    for (let i = 1; i <= size; i++) {
        if (i > 10) return numbers; // exit of function
        numbers.push(i);
    }

    console.log("This will never execute"); // Unreachable code
}

console.log(fillArray(25));

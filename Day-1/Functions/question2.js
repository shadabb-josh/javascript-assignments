// Question - Take a function that accepts a function as a parameter (also known as callback function). 
//     function test(callback){ 
//          callback(); 
//     } 
//     function callbackFunc(){ 
//          console.log(“Calling the callback function”) 
//          return 5; 
//     } 
//     Explore the following cases - what is printed in the console, and what gets returned: 
//     ○ test(callbackFunc) 
//     ○ test(callbackFunc()) 
//     ○ test(() => callbackFunc()) 
//     ○ What happens when you return callback() from the test function? 
//     ○ What happens when you return callback from the test function?
    

function test(callback){
    return callback();
}

function callbackFunc(){
    console.log("Calling the callback function")
    return 5;
}

// Case-1
// test(callbackFunc); // Calling the callback function

// Case-2
// test(callbackFunc()); // TypeError: callback is not a function 

// Case-3
// test(() => callbackFunc()); // TypeError: callback is not a function

// Case-4
// function test(callback){
//     return callback();
// }

// function callbackFunc(){
//     console.log("Calling the callback function")
//     return 5;
// }
// test(callbackFunc) // This is will return value 5 which is return in callbackFunc

// Case-5
// function test(callback){
//     return callback;
// }

// function callbackFunc(){
//     console.log("Calling the callback function")
//     return 5;
// }
// test(callbackFunc) // This will return the reference of callback function
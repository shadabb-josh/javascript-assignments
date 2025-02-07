// --------------------------------- Question 1-------------------------------------
//  const testAsyncFunction = () => {
//     return new Promise((resolve, reject) => {
//         if (Math.random() > 0.5) {
//             resolve('Test Resolve');
//         } else {
//             reject('Test Reject');
//         }
//     }).catch((err) => {
//         console.log('Error caught in testAsyncFunction: ', err);
//     });
// };

//  testAsyncFunction()
//     .then((res) => {
//         console.log('Response in then block: ', res);
//     })
//     .catch((err) => console.log('Error in catch block: ', err));

// What will be printed to the console when the promise resolves and when it rejects?
// testAsyncFunction returns a promise that rejects or resolve based on Math.ramdom()
// if promise get rejected catch inside testAsyncFunction get executed, inside one will not

// -----------------------------------Question-2--------------------------------------

// const testAsyncFunction = () => {
//   return Promise.reject("Test static reject");
// };

// testAsyncFunction()
//   .then((res) => {
//     console.log("Response in then block", res);
//   })
//   .catch((err) => console.log("Error in catch block", err));

// What will be printed to the console?
// Output - Error in catch block Test static reject

// -----------------------------------Question-3--------------------------------------

// const testAsyncFunction = () => {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Test Resolve");
//     } else {
//       reject("Test Reject");
//     }
//   }).catch((err) => {
//     console.log("Error caught in testAsyncFunction", err);
//     throw new Error("Forced error");
//   });
// };

// testAsyncFunction()
//   .then((res) => {
//     console.log("Response in then block: ", res);
//   })
//   .catch((err) => console.log("Error in catch block: ", err));

// What will be printed to the console?
// resolves if Math.random() > 0.5
// rejectes if Math.random() < 0.5
// if rejected controll will go to catch inside testAsyncFunction
// then it will log the message
// then throw a new Error Obj
// then in outer catch that error will be catched

// OUTPUT 
// Error caught in testAsyncFunction Test Reject -- from innner catch
// Error in catch block:  Error: Forced error -- from outer catch

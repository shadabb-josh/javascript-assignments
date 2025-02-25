// Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument
// Example:
// const func = async () => {
// console.log(“Printing before”)
// //Call your function here eg. sleep(3000)
// console.log(“Printing after”)
// }

function stopExecution(milliseconds){
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const func = async (milliseconds) => {
    console.log("Printing before");
    await stopExecution(milliseconds);
    console.log("Printing after")
}

func(3000)


// Question - 5
// Complete Question 4 tasks with async/await.

async function fetchData() {
  // fetch returns promise, if it is rejected we have 
  // handle it manually with try-catch block
  try {
    const response = await fetch("httpss://reqres.in/api/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

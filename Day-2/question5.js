// Question - 5
// Complete Question 4 tasks with async/await.

async function fetchData() {
  // fetch returns promise, if it is rejected we have
  // handle it manually with try-catch block
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    await new Promise((resolve, _) => setTimeout(resolve, 2000));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

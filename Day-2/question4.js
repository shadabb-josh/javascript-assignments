// Question - Create a promise that makes a fetch call,
// but resolves with the data only 2 seconds after
// the data has been received in the fetch.

const myPromise = new Promise((resolve, reject) => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => setTimeout(() => resolve(data), 2000))
    .catch(reject)
});

myPromise.then((data) => console.log(data))
// Using promises - write a function that fetches data from an API endpoint
// (GET https://reqres.in/api/users ). Log the data into the console once it is received

function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("Something went wrong, ", err));
}

fetchData()

// 1. Output - if promise resolved

// {
//     page: 1,
//     per_page: 6,
//     total: 12,
//     total_pages: 2,
//     data: [
//       {
//         id: 1,
//         email: 'george.bluth@reqres.in',
//         first_name: 'George',
//         last_name: 'Bluth',
//         avatar: 'https://reqres.in/img/faces/1-image.jpg'
//       },
//       {
//         id: 2,
//         email: 'janet.weaver@reqres.in',
//         first_name: 'Janet',
//         last_name: 'Weaver',
//         avatar: 'https://reqres.in/img/faces/2-image.jpg'
//       },
//       {
//         id: 3,
//         email: 'emma.wong@reqres.in',
//         first_name: 'Emma',
//         last_name: 'Wong',
//         avatar: 'https://reqres.in/img/faces/3-image.jpg'
//       },
//       {
//         id: 4,
//         email: 'eve.holt@reqres.in',
//         first_name: 'Eve',
//         last_name: 'Holt',
//         avatar: 'https://reqres.in/img/faces/4-image.jpg'
//       },
//       {
//         id: 5,
//         email: 'charles.morris@reqres.in',
//         first_name: 'Charles',
//         last_name: 'Morris',
//         avatar: 'https://reqres.in/img/faces/5-image.jpg'
//       },
//       {
//         id: 6,
//         email: 'tracey.ramos@reqres.in',
//         first_name: 'Tracey',
//         last_name: 'Ramos',
//         avatar: 'https://reqres.in/img/faces/6-image.jpg'
//       }
//     ],
//     support: {
//       url: 'https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral',
//       text: 'Tired of writing endless social media content? Let Content Caddy generate it for you.'
//     }
//   }

// 2. Output - if promise rejected

// Something went wrong,  TypeError: fetch failed
//     at node:internal/deps/undici/undici:12618:11
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
//   cause: Error: getaddrinfo ENOTFOUND reqres.ins
//       at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:107:26) {
//     errno: -3008,
//     code: 'ENOTFOUND',
//     syscall: 'getaddrinfo',
//     hostname: 'reqres.ins'
//   }
// }

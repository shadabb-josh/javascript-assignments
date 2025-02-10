// Create a blog list page that fetches a list of users from a mock API and adds them to a
// table on the page after loading. Add a button to sort the users by name. Add an input to
// filter the table by search. (Optional: Show “Loading...” or a loading spinner on the scre
// till the data loads)
const userTable = document.getElementById("userTable");
let users = [];

// Fetch users from API
async function fetchUsers() {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    users = data.data.map(user => ({ name: `${user.first_name} ${user.last_name}`, email: user.email }));
    displayUsers(users);
}

// Display users in table
function displayUsers(usersList) {
    userTable.innerHTML = usersList.map(user => `<tr><td>${user.name}</td><td>${user.email}</td></tr>`).join("");
}

// Sort users by name
function sortUsers() {
    users.sort((a, b) => a.name.localeCompare(b.name));
    displayUsers(users);
}

// Filter users by search
function filterUsers() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query));
    displayUsers(filteredUsers);
}

fetchUsers();

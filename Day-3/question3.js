// Create a form to submit a blog to a mock API (reqres.in)

document
  .getElementById("blogForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const response = await fetch("https://reqres.in/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    const data = await response.json();
    document.getElementById("response").textContent = `Blog submitted! ID: ${
      data.id || "N/A"
    }`;
  });

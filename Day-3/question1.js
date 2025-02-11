// Visit any page on the browser, and replace the content of all the p tags with the phrase
// “How’s the Josh?” using Javascript

document
  .querySelectorAll("p")
  .forEach((p) => (p.textContent = "How's the Josh"));

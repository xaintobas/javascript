// Build a Simple API with Node.js
// 1. Instructions:
// ○ Set Up Your Environment: Install Node.js on your local machine and initialize a new project using npm.
// ○ Create a Web Server:
// ■ Using Node.js and Express.js, create a basic web server that listens on a specified port.
// ■ Your server should respond with a welcome message when a user accesses the root URL ("/").
// ○ Build an API:
// ■ Create a simple API with two endpoints:
// ● A GET request that returns a list of fictional users in JSON format.
// ● A POST request that allows you to add a new user to the list.

// ○ Handle Errors:
// ■ Implement error handling for invalid requests (e.g., when a required field is missing or the request format is incorrect).

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

let users = [
  { name: "John", track: "Animation" },
  { name: "Peter", track: "Product Management" },
  { name: "Stephen", track: "Software Development" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
  res.end();
});

app.get("/user", (req, res) => {
  res.send("Hello Users");
  res.end();
});

app.post("/user", (req, res) => {
  const newUser = {
    name: "Ada",
    track: "Data Science",
  };

  users.push(newUser);

  res.json(users);
});

app.get("/admin", (req, res) => {
  res.send("Hello Admin");
  res.end();
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

// index.js
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "about.html"))
);

app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "contact-me.html"))
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

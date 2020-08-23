const express = require("express");
const path = require("path");
const { json } = require("express");
const fs = require("fs").promises;
const app = express();
let recordsFilePath = process.env.MY_VARIABLE || "./records.json";
// let recordsFilePath = process.env.
app.use(express.json());
app.use(express.static(path.join(__dirname, "../clientside/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/scores", async (req, res) => {
  const data = await fs.readFile(recordsFilePath);
  try {
    const json = JSON.parse(data);
    console.log(json);
    res.send(json);
  } catch (e) {
    console.log(JSON.parse(e));
    res.send(JSON.parse(e));
  }
});

app.post("/api/scores", async (req, res) => {
  const data = await fs.readFile(recordsFilePath);
  const json = JSON.parse(data);

  req.body.id = (json.length + 1).toString();
  json.push(req.body);
  await fs.writeFile(recordsFilePath, JSON.stringify(json));
  res.send("sucess");
});

module.exports = app;

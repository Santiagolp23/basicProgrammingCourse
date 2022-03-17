const express = require('express');
const app = express();

app.get("/", home);
app.get("/courses", courses);

function home(req, res) {
  res.send("This is the <strong>home<strong/>");
}

function courses(req, res) {
    res.send("These are the courses");
}

app.listen(8989);

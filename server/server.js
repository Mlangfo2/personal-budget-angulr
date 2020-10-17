//budget api
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
// security on my laptop needs me to run it on 3000 or 3001 or 3002
app.use(cors());

var budget = require("./budget_data.json");

app.get("/budget", (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});

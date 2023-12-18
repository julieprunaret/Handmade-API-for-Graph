const express = require("express");

const app = express();

const links = require("../datas/links.json");
const nodes = require("../datas/nodes.json");

app.get("/links", (req, res) => {
  res.json(links);
});

app.get("/nodes", (req, res) => {
  res.json(nodes);
});

app.listen(3000);

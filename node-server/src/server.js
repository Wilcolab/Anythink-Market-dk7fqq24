const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Node server is running" });
});

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});
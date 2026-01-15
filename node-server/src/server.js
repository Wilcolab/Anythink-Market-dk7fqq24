const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Node server is running" });
});

const PORT = 8001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Node server running on port ${PORT}`);
});

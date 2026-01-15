const express = require("express");

const app = express();

// Health check endpoint (VERY IMPORTANT for CI)
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

const PORT = 8001;

// Bind to all interfaces for Docker
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Node server running on port ${PORT}`);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from DEV");
});

app.get("/health", (req, res) => {
    res.json({ status: "OK", env: process.env.ENV || "dev" });
});  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// test

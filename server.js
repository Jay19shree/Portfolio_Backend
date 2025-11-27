const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const path = require("path");

const portfolioRoute = require("./routes/portfolioRoute");
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;

// PRODUCTION MODE
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // FINAL FIX — THIS WORKS ✔️
  app.get("/(.*)", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

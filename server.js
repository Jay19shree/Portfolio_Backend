const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
const path = require("path");

// PRODUCTION MODE
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // FIXED WILDCARD ROUTE ("*"" ❌ → "/*" ✅)
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// START SERVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

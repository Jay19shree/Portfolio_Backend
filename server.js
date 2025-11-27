const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const path = require("path");
const cors = require('cors')

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use(cors())
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // FIXED: universal fallback without path-to-regexp
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

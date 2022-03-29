const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const cors = require("cors");
require("dotenv").config({ path:"./config.env" });
// app.use(cors());
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("Database connection error...");
    console.log(err);
  });

const dashboardRoutes = require("./routes/dashboard");
const apiData = require("./routes/api");

app.use("/dashboard", dashboardRoutes);
app.use("/api", apiData);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  // const path = require("path");
  // app.get("*", (req, res) => {
  //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // })
}


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

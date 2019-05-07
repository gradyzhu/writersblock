const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

app.get("/", (req, res) => res.send("hello world"));

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));



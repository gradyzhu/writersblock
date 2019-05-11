const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const db = require('./config/keys').mongoURI;
const passport = require('passport');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    handle: req.user.handle,
    email: req.user.email
  });
});


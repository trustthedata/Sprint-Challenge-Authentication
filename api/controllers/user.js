const User = require("../models/userModels");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const { username, password } = req.body;
  User.create({ username, password }, (err, user) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json(user);
  });
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
};

module.exports = {
  createUser
};

const db = require("../models");
const User  = db.users;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require("../config/auth.config");

exports.register = (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  }).then(user => {
    res.status(200).send("User was registered successfully!");
  }).catch(err => {
    res.status(500).send({ message: err.message });
  })
}

exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if(!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({id: user.id}, config.secret, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      accessToken: token
    });

  })
}
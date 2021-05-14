const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
  
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name ? {name: {[Op.like]: `%${name}%`}} : null;

  User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };

// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a user by the id in the request
exports.update = (req, res) => {
  
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published users
exports.findAllPublished = (req, res) => {
  
};
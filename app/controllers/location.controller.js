const db = require("../models");
const Location = db.locations;
const Op = db.Sequelize.Op;

// Create and Save a new location
exports.create = (req, res) => {
  
};

// Get the location for a given id
exports.findLocationById = (locationId) => {

  return Location.findByPk(locationId)
    .then((location) => {
      return location;
    })
    .catch((err) => {
      console.log(">> Error while finding location: ", err);
    });
};

// Retrieve all locations from the database.
exports.findAll = (req, res) => {
    const code = req.query.code;
    var condition = code ? { code: { [Op.like]: `%${code}%` } } : null;
  
    Location.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving locations."
        });
      });
  };

// Find a single location with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Location.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Location with id=" + id
      });
    });
};

// Update a location by the id in the request
exports.update = (req, res) => {
  
};

// Delete a location with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all locations from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published locations
exports.findAllPublished = (req, res) => {
  
};
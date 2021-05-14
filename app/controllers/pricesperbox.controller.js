const db = require("../models");
const PricesPerBox = db.pricesperbox;
const Op = db.Sequelize.Op;

// Create and Save a new pricesperbox
exports.create = (req, res) => {
  
};

// Get the pricesperbox for a given id
exports.findPricesPerBoxById = (pricesperboxId) => {

  return PricesPerBox.findByPk(pricesperboxId)
    .then((pricesperbox) => {
      return pricesperbox;
    })
    .catch((err) => {
      console.log(">> Error while finding pricesperbox: ", err);
    });
};

// Retrieve all pricesperboxes from the database.
exports.findAll = (req, res) => {
    const code = req.query.code;
    var condition = code ? { code: { [Op.like]: `%${code}%` } } : null;
  
    PricesPerBox.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving pricesperboxes."
        });
      });
  };

// Find a single pricesperbox with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  PricesPerBox.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving PricesPerBox with id=" + id
      });
    });
};

// Update a pricesperbox by the id in the request
exports.update = (req, res) => {
  
};

// Delete a pricesperbox with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all pricesperboxes from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published pricesperboxes
exports.findAllPublished = (req, res) => {
  
};
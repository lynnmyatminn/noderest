const db = require("../models");
const Customer = db.customers;
const CustomerAddress = db.customerAddresses;
const Op = db.Sequelize.Op;

// Create and Save a new customer
exports.createCustomer = (customer) => {
  return Customer.create({
    title: customer.title,
    description: customer.description,
  })
    .then((customer) => {
      console.log(">> Created customer: " + JSON.stringify(customer, null, 4));
      return customer;
    })
    .catch((err) => {
      console.log(">> Error while creating customer: ", err);
    });
};

exports.createCustomerAddress = (customerId, cusAddress) => {
  return CustomerAddress.create({
    address: cusAddress.address,
    city: cusAddress.city,
    division: cusAddress.division,
    country: cusAddress.country,
    postcode: cusAddress.postcode,
    customerId: customerId,
  })
    .then((cusAddress) => {
      console.log(">> Created customer Address: " + JSON.stringify(cusAddress, null, 4));
      return cusAddress;
    })
    .catch((err) => {
      console.log(">> Error while creating customer Address: ", err);
    });
};

// Get the addresses for a given customer
exports.findCustomerById = (customerId) => {

  // Customer.findByPk(customerId, { include: ["customerAddresses"] })
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error retrieving Customer with id=" + customerId
  //     });
  //   });

  return Customer.findByPk(customerId, { include: ["customerAddresses"] })
    .then((customer) => {
      return customer;
    })
    .catch((err) => {
      console.log(">> Error while finding customer: ", err);
    });
};

// Get the addresses for a given customer address id
exports.findCustomerAddressById = (id) => {
  return CustomerAddress.findByPk(id, { include: ["customers"] })
    .then((customerAddress) => {
      return customerAddress;
    })
    .catch((err) => {
      console.log(">> Error while finding customer address: ", err);
    });
};

// Retrieve all customers include addresses from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Customer.findAll({ where: condition, include: ["customerAddresses"]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      });
  };

// Find a single customer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Customer.findByPk(id, { include: ["customerAddresses"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a customer by the id in the request
exports.update = (req, res) => {
  
};

// Delete a customer with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all customers from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published customers
exports.findAllPublished = (req, res) => {
  
};
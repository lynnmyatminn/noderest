const express = require("express");
require("dotenv/config");
const bcrypt = require("bcrypt");
const db = require("./app/models");
const Customers = db.customers;
const Address = db.customerAddresses;
const Users = db.users;
const faker = require("faker");
const { customers } = require("./app/models");
const run = async () => {
  //Create default user
  Users.create({
    name: "Developer",
    email: "hlatawthardev@gmail.com",
    password: bcrypt.hashSync("m@thibuu", 8),
  }).then((user) => {
    console.log(">> Created user: " + JSON.stringify(user, null, 4));
  });

  // Create Random Customer and his Address
  var i;
  for (i = 0; i < 10; i++) {
    Customers.create({
      title: faker.name.findName(),
      description: faker.name.jobTitle(),
    }).then((customer) => {
      Address.create({
        address: faker.address.streetAddress(true),
        city: faker.address.cityName(),
        division: faker.address.state(),
        country: faker.address.country(),
        postcode: faker.address.zipCode(),
        customerId: customer.id,
      });
    });
  }
};

db.sequelize.sync({ force: false }).then(() => {
  run();
});

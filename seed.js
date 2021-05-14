const express = require("express");
require("dotenv/config");
const db = require("./app/models");

const customerController = require("./app/controllers/customer.controller");

const run = async () => {
  const cus1 = await customerController.createCustomer({
    title: "cus1",
    description: "cus#1 Description",
  });
  const cus2 = await customerController.createCustomer({
    title: "cus2",
    description: "cus#2 Description",
  });
  const cusAdd1 = await customerController.createCustomerAddress(cus1.id, {
    address: "Good job!",
    city: "Good job!",
    division: "Good job!",
    country: "Good job!",
    postcode: "Good job!",
  });
  await customerController.createCustomerAddress(cus1.id, {
    address: "Good job!",
    city: "Good job!",
    division: "Good job!",
    country: "Good job!",
    postcode: "Good job!",
  });
  const cusAdd2 = await customerController.createCustomerAddress(cus2.id, {
    address: "Good job!",
    city: "Good job!",
    division: "Good job!",
    country: "Good job!",
    postcode: "Good job!",
  });
  await customerController.createCustomerAddress(cus2.id, {
    address: "Good job!",
    city: "Good job!",
    division: "Good job!",
    country: "Good job!",
    postcode: "Good job!",
  });
  const cus1Data = await customerController.findCustomerById(cus1.id);
  console.log(
    ">> Customer id=" + cus1Data.id,
    JSON.stringify(cus1Data, null, 2)
  );
  const cus2Data = await customerController.findCustomerById(cus2.id);
  console.log(
    ">> Customer id=" + cus2Data.id,
    JSON.stringify(cus2Data, null, 2)
  );
  const cusAddress1Data = await customerController.findCustomerAddressById(
    cusAdd1.id
  );
  console.log(
    ">> Customer address id=" + cusAdd1.id,
    JSON.stringify(cusAddress1Data, null, 2)
  );
  const cusAddress2Data = await customerController.findCustomerAddressById(
    cusAdd2.id
  );
  console.log(
    ">> Customer address id=" + cusAdd2.id,
    JSON.stringify(cusAddress2Data, null, 2)
  );
  const customers = await customerController.findAll();
  console.log(">> All customers", JSON.stringify(customers, null, 2));
};

db.sequelize.sync({ force: false }).then(() => {
  run();
});

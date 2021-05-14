const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

// const customerController = require("./app/controllers/customer.controller");

// const run = async () => {
  
//   // const cus1 = await customerController.createCustomer({
//   //   title: "cus1",
//   //   description: "cus#1 Description",
//   // });
//   // const cus2 = await customerController.createCustomer({
//   //   title: "cus2",
//   //   description: "cus#2 Description",
//   // });
//   // const cusAdd1 = await customerController.createCustomerAddress(cus1.id, {
//   //   address: "Good job!",
//   //   city: "Good job!",
//   //   division: "Good job!",
//   //   country: "Good job!",
//   //   postcode: "Good job!",
//   // });
//   // await customerController.createCustomerAddress(cus1.id, {
//   //   address: "Good job!",
//   //   city: "Good job!",
//   //   division: "Good job!",
//   //   country: "Good job!",
//   //   postcode: "Good job!",
//   // });
//   // const cusAdd2 = await customerController.createCustomerAddress(cus2.id, {
//   //   address: "Good job!",
//   //   city: "Good job!",
//   //   division: "Good job!",
//   //   country: "Good job!",
//   //   postcode: "Good job!",
//   // });
//   // await customerController.createCustomerAddress(cus2.id, {
//   //   address: "Good job!",
//   //   city: "Good job!",
//   //   division: "Good job!",
//   //   country: "Good job!",
//   //   postcode: "Good job!",
//   // });
//   // const cus1Data = await customerController.findCustomerById(cus1.id);
//   // console.log(
//   //   ">> Customer id=" + cus1Data.id,
//   //   JSON.stringify(cus1Data, null, 2)
//   // );
//   // const cus2Data = await customerController.findCustomerById(cus2.id);
//   // console.log(
//   //   ">> Customer id=" + cus2Data.id,
//   //   JSON.stringify(cus2Data, null, 2)
//   // );
//   // const cusAddress1Data = await customerController.findCustomerAddressById(cusAdd1.id);
//   // console.log(
//   //   ">> Customer address id=" + cusAdd1.id,
//   //   JSON.stringify(cusAddress1Data, null, 2)
//   // );
//   // const cusAddress2Data = await customerController.findCustomerAddressById(cusAdd2.id);
//   // console.log(
//   //   ">> Customer address id=" + cusAdd2.id,
//   //   JSON.stringify(cusAddress2Data, null, 2)
//   // );

//   // const customers = await customerController.findAll();
//   const customers = await customerController.findAll();
//   console.log(">> All customers", JSON.stringify(customers, null, 2));
// };

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to nujabes application." });
});

//db.sequelize.sync();
db.sequelize.sync({ force: false }).then(() => {
  // console.log("Drop and re-sync db.");
  // run();
});

require("./app/routes/customer.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/location.routes")(app);
require("./app/routes/pricesperbox.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
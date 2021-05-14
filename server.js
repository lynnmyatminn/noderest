const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to nujabes application." });
});

//db.sequelize.sync();
db.sequelize.sync();

require("./app/routes/customer.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/location.routes")(app);
require("./app/routes/pricesperbox.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.customerAddresses = require("./customerAddress.model.js")(sequelize, Sequelize);

db.customers.hasMany(db.customerAddresses, { as: "customerAddresses" });
db.customerAddresses.belongsTo(db.customers, {
  foreignKey: "customerId",
  as: "customer",
});

db.users = require("./user.model.js")(sequelize, Sequelize);

db.locations = require("./location.model.js")(sequelize, Sequelize);
db.pricesperbox = require("./pricesperbox.model.js")(sequelize, Sequelize);

module.exports = db;
module.exports = (sequelize, Sequelize) => {
    const CustomerAddress = sequelize.define("customerAddresses", {
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      division: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.STRING
      },
    });
    return CustomerAddress;
  };
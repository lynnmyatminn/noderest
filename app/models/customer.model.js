module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Customer;
  };
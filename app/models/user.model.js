module.exports = (sequelize, Sequelize) => {
  return sequelize.define("users", {
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  };
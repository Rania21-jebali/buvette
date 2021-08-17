module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone:{
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};

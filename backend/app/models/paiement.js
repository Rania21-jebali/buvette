module.exports = (sequelize, Sequelize) => {
    const Paiement = sequelize.define("paiement", {
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model:'users',
          key:'id'
        }
      }
      });
  
    return Paiement;
  };
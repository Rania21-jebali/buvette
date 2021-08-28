module.exports = (sequelize, Sequelize) => {
    const Commande = sequelize.define("commande", {
      total: {
        type: Sequelize.DOUBLE
      },
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model:'users',
          key:'id'
        }
      }
      });
  
    return Commande;
  };
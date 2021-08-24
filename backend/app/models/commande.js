module.exports = (sequelize, Sequelize) => {
    const Commande = sequelize.define("commande", {
      quantite: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.DOUBLE
      },
      description: {
        type: Sequelize.STRING
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
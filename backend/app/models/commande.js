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
      articleId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model:'articles',
          key:'id'
        }
      }
      });
  
    return Commande;
  };
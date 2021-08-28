module.exports = (sequelize, Sequelize) => {
    const Panier = sequelize.define("panier", {
      total: {
        type: Sequelize.DOUBLE
      },
      quantite: {
        type: Sequelize.INTEGER
      },
      articleId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model:'articles',
          key:'id'
        }
      },
      commandeId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model:'commandes',
          key:'id'
        }
      }

      });
  
    return Panier;
  };
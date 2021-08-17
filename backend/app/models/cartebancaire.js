module.exports = (sequelize, Sequelize) => {
    const Cartebancaire = sequelize.define("cartebancaire", {
      num: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      paiementId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model:'paiements',
          key:'id'
        }
      }
      });
  
    return Cartebancaire;
  };
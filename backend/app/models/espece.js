module.exports = (sequelize, Sequelize) => {
    const Espece = sequelize.define("espece", {
      montant: {
        type: Sequelize.DOUBLE
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
  
    return Espece;
  };
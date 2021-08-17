module.exports = (sequelize, Sequelize) => {
    const Facture = sequelize.define("facture", {
      date: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.DOUBLE
      }
      
      });
  
    return Facture;
  };
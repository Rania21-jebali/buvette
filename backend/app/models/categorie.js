module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define("categorie", {
      libelle: {
        type: Sequelize.STRING
      }
      });
  
    return Categorie;
  };
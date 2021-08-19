module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define("categorie", {
      libelle: {
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
  
    return Categorie;
  };
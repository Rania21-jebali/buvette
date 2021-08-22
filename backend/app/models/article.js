module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.DOUBLE
      },
      categorieId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model:'categories',
          key:'id'
        }
      }
    });
  
    return Article;
  };
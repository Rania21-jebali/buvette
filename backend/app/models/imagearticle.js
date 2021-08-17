module.exports = (sequelize, Sequelize) => {
    const Imagearticle = sequelize.define("imagearticle", {
      url: {
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
  
    return Imagearticle;
  };
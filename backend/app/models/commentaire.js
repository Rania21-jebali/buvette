module.exports = (sequelize, Sequelize) => {
    const Commentaire = sequelize.define("commentaire", {
      contenu: {
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
  
    return Commentaire;
  };
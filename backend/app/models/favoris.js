module.exports = (sequelize, Sequelize) => {
    const Favoris = sequelize.define("favoris", {
        favoris: {
            type: Sequelize.BOOLEAN
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
  
    return Favoris;
  };
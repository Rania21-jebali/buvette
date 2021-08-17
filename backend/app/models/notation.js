module.exports = (sequelize, Sequelize) => {
    const Notation = sequelize.define("notation", {
      Valeur: {
        type: Sequelize.INTEGER
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
  
    return Notation;
  };
module.exports = (sequelize, Sequelize) => {
    const Possede = sequelize.define("possede", {
        commandeId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            references: {
              model:'commandes',
              key:'id'
            }
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
  
    return Possede;
  };
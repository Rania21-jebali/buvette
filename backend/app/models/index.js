const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.article = require("../models/article.js")(sequelize, Sequelize);
db.notation = require("../models/notation.js")(sequelize, Sequelize);
db.favoris = require("../models/favoris.js")(sequelize, Sequelize);
db.commentaire = require("../models/commentaire.js")(sequelize, Sequelize);
db.categorie = require("../models/categorie.js")(sequelize, Sequelize);
db.commande = require("../models/commande.js")(sequelize, Sequelize);
db.imagearticle = require("../models/imagearticle.js")(sequelize, Sequelize);
db.possede = require("../models/possede.js")(sequelize, Sequelize);
db.facture = require("../models/facture.js")(sequelize, Sequelize);
db.paiement = require("../models/paiement.js")(sequelize, Sequelize);
db.espece = require("../models/espece.js")(sequelize, Sequelize);
db.cartebancaire = require("../models/cartebancaire.js")(sequelize, Sequelize);
db.panier = require("../models/panier.js")(sequelize, Sequelize);



db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;

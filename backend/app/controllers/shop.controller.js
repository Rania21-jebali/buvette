const db = require("../models");
const Op = db.Sequelize.Op;
const Article = require("../models/article");
const Cart = require("../models/cart");



// Retrieve all Article from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Article.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articles."
        });
      });
  };
 //Ajouter au panier
 exports.addToCart=(req , res) =>{
    const addToArticle = Article.findByPk(res.body.id)[0];
    Cart.save(addToArticle);
    console.log(Cart.getCart());
    res.send('saved succesfully');
}

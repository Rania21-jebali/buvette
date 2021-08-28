const db = require("../models");
const Panier = db.panier;
const Op = db.Sequelize.Op;

// Create and Save a new Panier
exports.create = (req, res) => {
    // Create a Panier
    const panier = {
      total: req.body.total,
      quantite: req.body.quantite,
      articleId: req.body.articleId,
      commandeId: req.body.commandeId
    };
  
    // Save Panier in the database
    Panier.create(panier)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Panier." });
        });
    };


// Find a single PAnier with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Panier.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Panier with id=" + id
        });
      });
  };
 
// Update a Panier by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Panier.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Panier was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Panier with id=${id}. Maybe Panier was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Panier with id=" + id
        });
      });
  };

// Delete a Panier with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Panier.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Panier was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Panier with id=${id}. Maybe Panier was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Panier with id=" + id
        });
      });
  };
  //Ajouter au panier
  exports.addToCart=(req , res) =>{
      const addToArticle = Article.findByPk(res.body)[0];
  }




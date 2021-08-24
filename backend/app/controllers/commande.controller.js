const db = require("../models");
const Commande = db.commande;
const Op = db.Sequelize.Op;

// Create and Save a new Commande
exports.create = (req, res) => {
    // Create a Commande
    const commande = {
      quantite: req.body.quantite,
      total: req.body.total,
      description: req.body.description,
      userId: req.body.userId
    };
  
    // Save Commande in the database
    Commande.create(commande)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Commande." });
        });
    };


// Find a single Commande with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Commande.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Commande with id=" + id
        });
      });
  };

// Update a Commande by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Commande.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Commande was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Commande with id=${id}. Maybe Commande was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Commande with id=" + id
        });
      });
  };
// Delete a Commande with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Commande.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Commande was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Commande with id=${id}. Maybe Commande was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Commande with id=" + id
        });
      });
  };




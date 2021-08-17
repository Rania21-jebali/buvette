const db = require("../models");
const Cartebancaire = db.cartebancaire;
const Op = db.Sequelize.Op;

// Create and Save a new Cartebancaire
exports.create = (req, res) => {
    // Create a Cartebancaire
    const cartebancaire = {
      num: req.body.num,
      date: req.body.date,
      paiementId: req.body.paiementId
    };
  
    // Save Cartebancaire in the database
    Cartebancaire.create(cartebancaire)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Cartebancaire." });
        });
    };


// Find a single Cartebancaire with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Cartebancaire.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Cartebancaire with id=" + id
        });
      });
  };

// Update a Cartebancaire by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Cartebancaire.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cartebancaire was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Cartebancaire with id=${id}. Maybe Cartebancaire was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Cartebancaire with id=" + id
        });
      });
  };
// Delete a Cartebancaire with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Cartebancaire.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cartebancaire was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Cartebancaire with id=${id}. Maybe Cartebancaire was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Cartebancaire with id=" + id
        });
      });
  };




const db = require("../models");
const Facture = db.facture;
const Op = db.Sequelize.Op;

// Create and Save a new Facture
exports.create = (req, res) => {
    // Create a Facture
    const facture= {
      date: req.body.date,
      total: req.body.total
    };
  
    // Save Facture in the database
    Facture.create(facture)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Facture." });
        });
    };


// Find a single Facture with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Facture.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Facture with id=" + id
        });
      });
  };

// Update a Facture by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Facture.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Facture was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Facture with id=${id}. Maybe Facture was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Facture with id=" + id
        });
      });
  };
// Delete a Facture with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Facture.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Facture was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Facture with id=${id}. Maybe Facture was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Facture with id=" + id
        });
      });
  };




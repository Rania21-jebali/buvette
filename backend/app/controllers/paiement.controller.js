const db = require("../models");
const Paiement = db.paiement;
const Op = db.Sequelize.Op;

// Create and Save a new Paiement
exports.create = (req, res) => {
    // Create a Paiement
    const paiement= {
      userId: req.body.userId,
    };
  
    // Save Paiement in the database
    Paiement.create(paiement)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Paiement." });
        });
    };


// Find a single Paiement with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Paiement.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Paiement with id=" + id
        });
      });
  };

// Update a Paiement by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Paiement.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Paiement was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Paiement with id=${id}. Maybe Paiement was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Paiement with id=" + id
        });
      });
  };
// Delete a Paiement with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Paiement.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Paiement was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Paiement with id=${id}. Maybe Paiement was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Paiement with id=" + id
        });
      });
  };




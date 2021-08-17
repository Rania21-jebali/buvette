const db = require("../models");
const Espece = db.espece;
const Op = db.Sequelize.Op;

// Create and Save a new Espece
exports.create = (req, res) => {
    // Create a Espece
    const espece = {
      montant: req.body.montant,
      paiementId: req.body.paiementId
    };
  
    // Save Espece in the database
    Espece.create(espece)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Espece." });
        });
    };


// Find a single Espece with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Espece.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Espece with id=" + id
        });
      });
  };

// Update a Espece by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Espece.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Espece was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Espece with id=${id}. Maybe Espece was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Espece with id=" + id
        });
      });
  };
// Delete a Espece with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Espece.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Espece was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Espece with id=${id}. Maybe Espece was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Espece with id=" + id
        });
      });
  };




const db = require("../models");
const Notation = db.notation;
const Op = db.Sequelize.Op;

// Create and Save a new Notation
exports.create = (req, res) => {
    // Create a notation
    const notation = {
      Valeur: req.body.Valeur,
      userId: req.body.userId,
    };
  
    // Save Notation in the database
    Notation.create(notation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Notation." });
        });
    };


// Find a single Notation with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Notation.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Notation with id=" + id
        });
      });
  };

// Update a Notation by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Notation.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Notation was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Notation with id=${id}. Maybe Notation was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Notation with id=" + id
        });
      });
  };
// Delete a Notation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Notation.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Notation was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Notation with id=${id}. Maybe Notation was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Notation with id=" + id
        });
      });
  };




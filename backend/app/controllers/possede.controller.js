const db = require("../models");
const Possede = db.possede;
const Op = db.Sequelize.Op;

// Create and Save a new Possede
exports.create = (req, res) => {
    // Create a Possede
    const possede = {
      commandeId: req.body.commandeId,
      articleId: req.body.articleId
    };
  
    // Save Possede in the database
    Possede.create(possede)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Possede." });
        });
    };


// Find a single Possede with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Possede.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Possede with id=" + id
        });
      });
  };

// Update a Possede by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Possede.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Possede was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Possede with id=${id}. Maybe Possede was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Possede with id=" + id
        });
      });
  };
// Delete a Possede with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Possede.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Possede was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Possede with id=${id}. Maybe Possede was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Possede with id=" + id
        });
      });
  };




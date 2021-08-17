const db = require("../models");
const Commentaire = db.commentaire;
const Op = db.Sequelize.Op;

// Create and Save a new Commentaire
exports.create = (req, res) => {
    // Create a Commentaire
    const commentaire = {
      contenu: req.body.contenu,
      userId: req.body.userId
    };
  
    // Save Commentaire in the database
    Commentaire.create(commentaire)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Commentaire." });
        });
    };


// Find a single Commentaire with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Commentaire.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Commentaire with id=" + id
        });
      });
  };

// Update a Commentaire by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Commentaire.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Commentaire was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Commentaire with id=${id}. Maybe Commentaire was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Commentaire with id=" + id
        });
      });
  };
// Delete a Commentaire with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Commentaire.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Commentaire was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Commentaire with id=${id}. Maybe Commentaire was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Commentaire with id=" + id
        });
      });
  };




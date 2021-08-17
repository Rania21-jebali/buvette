const db = require("../models");
const Favoris = db.favoris;
const Op = db.Sequelize.Op;

// Create and Save a new Favoris
exports.create = (req, res) => {
    // Create a Favoris
    const favoris = {
      favoris: req.body.favoris,
      userId: req.body.userId
    };
  
    // Save Favoris in the database
    Favoris.create(favoris)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Favoris." });
        });
    };


// Find a single Favoris with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Favoris.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Favoris with id=" + id
        });
      });
  };

// Update a Favoris by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Favoris.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Favoris was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Favoris with id=${id}. Maybe Favoris was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Favoris with id=" + id
        });
      });
  };
// Delete a Favoris with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Favoris.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Favoris was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Favoris with id=${id}. Maybe Favoris was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Favoris with id=" + id
        });
      });
  };




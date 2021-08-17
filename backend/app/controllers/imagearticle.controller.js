const db = require("../models");
const Imagearticle = db.imagearticle;
const Op = db.Sequelize.Op;

// Create and Save a new Imagearticle
exports.create = (req, res) => {
    // Create a Imagearticle
    const imagearticle = {
      url: req.body.url,
    };
  
    // Save Imagearticle in the database
    Imagearticle.create(imagearticle)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Image article." });
        });
    };


// Find a single Imagearticle with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Imagearticle.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Image article with id=" + id
        });
      });
  };

// Update a Image article by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Imagearticle.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Image article was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Image article with id=${id}. Maybe Image article was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Image article with id=" + id
        });
      });
  };
// Delete a Image article with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Imagearticle.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Image article was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Image article with id=${id}. Maybe Notation was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Image article with id=" + id
        });
      });
  };




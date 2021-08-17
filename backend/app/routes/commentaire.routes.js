module.exports = app => {
    const commentaire = require("../controllers/commentaire.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Notation
    router.post("/", commentaire.create);
    // Retrieve a single notation  with id
    router.get("/:id", commentaire.findOne);
  
    // Update a notation  with id
    router.put("/:id", commentaire.update);
  
    // Delete a notation with id
    router.delete("/:id", commentaire.delete);
  
    app.use('/api/commentaire', router);
};
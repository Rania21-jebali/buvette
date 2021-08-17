module.exports = app => {
    const cartebancaire = require("../controllers/cartebancaire.controller.js");
  
    var router = require("express").Router();
  
    // Create a new cartebancaire
    router.post("/", cartebancaire.create);
    // Retrieve a single cartebancaire  with id
    router.get("/:id", cartebancaire.findOne);
  
    // Update a cartebancaire  with id
    router.put("/:id", cartebancaire.update);
  
    // Delete a cartebancaire with id
    router.delete("/:id", cartebancaire.delete);
  
    app.use('/api/cartebancaire', router);
};
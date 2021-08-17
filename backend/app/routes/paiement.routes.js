module.exports = app => {
    const paiement = require("../controllers/paiement.controller.js");
  
    var router = require("express").Router();
  
    // Create a new paiement 
    router.post("/", paiement .create);
    // Retrieve a single paiement   with id
    router.get("/:id", paiement .findOne);
  
    // Update a paiement  with id
    router.put("/:id", paiement .update);
  
    // Delete a notation with id
    router.delete("/:id", paiement .delete);
  
    app.use('/api/paiement ', router);
};
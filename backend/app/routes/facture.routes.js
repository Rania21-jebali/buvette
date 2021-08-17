module.exports = app => {
    const facture = require("../controllers/facture.controller.js");
  
    var router = require("express").Router();
  
    // Create a new facture
    router.post("/", facture.create);
    // Retrieve a single facture  with id
    router.get("/:id", facture.findOne);
  
    // Update a notation  with id
    router.put("/:id", facture.update);
  
    // Delete a facture with id
    router.delete("/:id", facture.delete);
  
    app.use('/api/facture', router);
};
module.exports = app => {
    const commande = require("../controllers/commande.controller.js");
  
    var router = require("express").Router();
  
    // Create a new commande
    router.post("/", commande.create);
    // Retrieve a single commande  with id
    router.get("/:id", commande.findOne);
  
    // Update a commande with id
    router.put("/:id", commande.update);
  
    // Delete a commande with id
    router.delete("/:id", commande.delete);
  
    app.use('/api/commande', router);
};
module.exports = app => {
    const panier = require("../controllers/panier.controller.js");
  
    var router = require("express").Router();
  
    // Create a new panier
    router.post("/", panier.create);
    // Retrieve a single panier with id
    router.get("/:id", panier.findOne);
    
    // Update a panier with id
    router.put("/:id", panier.update);
  
    // Delete a panier with id
    router.delete("/:id", panier.delete);
  
    app.use('/api/panier', router);
};
module.exports = app => {
    const favoris = require("../controllers/favoris.controller.js");
  
    var router = require("express").Router();
  
    // Create a new favoris
    router.post("/", favoris.create);
    // Retrieve a single favoris with id
    router.get("/:id", favoris.findOne);
  
    // Update a favoris  with id
    router.put("/:id", favoris.update);
  
    // Delete a favoris with id
    router.delete("/:id", favoris.delete);
  
    app.use('/api/favoris', router);
};
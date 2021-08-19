module.exports = app => {
    const categorie = require("../controllers/categorie.controller.js");
  
    var router = require("express").Router();
  
    // Create a newcategorie
    router.post("/", categorie.create);
     // Retrieve all Categorie
     router.get("/", categorie.findAll);
  
    // Retrieve a single categorie with id
    router.get("/:id", categorie.findOne);
  
    // Update a categorie  with id
    router.put("/:id", categorie.update);
  
    // Delete a categorie with id
    router.delete("/:id", categorie.delete);
  
    app.use('/api/categorie', router);
};
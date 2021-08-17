module.exports = app => {
    const possede = require("../controllers/possede.controller.js");
  
    var router = require("express").Router();
  
    // Create a new possede
    router.post("/", possede.create);
    // Retrieve a single possede  with id
    router.get("/:id", possede.findOne);
  
    // Update a notation  with id
    router.put("/:id", possede.update);
  
    // Delete a possede with id
    router.delete("/:id", possede.delete);
  
    app.use('/api/possede', router);
};
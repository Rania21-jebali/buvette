module.exports = app => {
    const notation = require("../controllers/notation.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Notation
    router.post("/", notation.create);
    // Retrieve a single notation  with id
    router.get("/:id", notation.findOne);
  
    // Update a notation  with id
    router.put("/:id", notation.update);
  
    // Delete a notation with id
    router.delete("/:id", notation.delete);
  
    app.use('/api/notation', router);
};
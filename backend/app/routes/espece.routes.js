module.exports = app => {
    const espece = require("../controllers/espece.controller.js");
  
    var router = require("express").Router();
  
    // Create a new espece
    router.post("/", espece.create);
    // Retrieve a single espece with id
    router.get("/:id", espece.findOne);
  
    // Update a espece  with id
    router.put("/:id", espece.update);
  
    // Delete a espece with id
    router.delete("/:id", espece.delete);
  
    app.use('/api/espece', router);
};
module.exports = app => {
    const imagearticle = require("../controllers/imagearticle.controller.js");
  
    var router = require("express").Router();
  
    // Create a new image article
    router.post("/", imagearticle.create);
    // Retrieve a single image article  with id
    router.get("/:id", imagearticle.findOne);
  
    // Update a image article  with id
    router.put("/:id", imagearticle.update);
  
    // Delete a image article with id
    router.delete("/:id", imagearticle.delete);
  
    app.use('/api/imagearticle', router);
};
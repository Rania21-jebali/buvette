module.exports = app => {
    const shop = require("../controllers/shop.controller.js");
    const path= require("path");
    var router = require("express").Router();
  
    // Create a new Article
    router.post("/", shop.addToCart);
  
    // Retrieve all Article
    router.get("/", shop.findAll);
    
    app.use('/api/shop', router);
};
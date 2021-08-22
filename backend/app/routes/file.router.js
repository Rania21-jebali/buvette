module.exports = app => {
    const fileWorker = require("../controllers/file.controller.js");
    let upload = require('../config/multer.config.js');
    var router = require("express").Router();
  
    router.post('/upload', upload.single("file"), fileWorker.uploadFile);
 
    router.get('/all', fileWorker.listAllFiles);
     
    router.get('/:id', fileWorker.downloadFile);
    app.use('/api/file', router);
};
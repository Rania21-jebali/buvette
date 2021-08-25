var stream = require('stream');
const db = require("../models");
const fs = require("fs");
const File = db.files;
const Op = db.Sequelize.Op;

exports.uploadFile = (req, res) => {
	const files = {
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer
	  };
	File.create(files).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the File." });
        });
    };

exports.listAllFiles = (req, res) => {
	File.findAll({attributes: ['id', 'name']}).then(files => {
	  res.json(files);
	});
}
exports.downloadFile = (req, res) => {
	File.findById(req.params.id).then(file => {
		var fileContents = Buffer.from(file.data, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents);
		
		res.set('Content-disposition', 'attachment; filename=' + file.name);
		res.set('Content-Type', file.type);

		readStream.pipe(res);
	})
}
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
};

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, 'uploads')
  },
  filename: (req, file, callBack) => {
      callBack(null, `Buvette_${file.originalname}`)
  }
})

const upload = multer({ storage: storage })
app.post('/image', upload.single('file'), (req, res, next) => {
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file);
})

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
initial();

// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
  // console.log('Drop and Resync Database with { force: true }');
  //initial();
 //});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to buvette application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/article.routes")(app);
require("./app/routes/notation.routes")(app);
require('./app/routes/commentaire.routes')(app);
require("./app/routes/favoris.routes")(app);
require("./app/routes/categorie.routes")(app);
require("./app/routes/commande.routes")(app);
require("./app/routes/imagearticle.routes")(app);
require("./app/routes/possede.routes")(app);
require("./app/routes/facture.routes")(app);
require("./app/routes/paiement.routes")(app);
require("./app/routes/espece.routes")(app);
require("./app/routes/cartebancaire.routes")(app);
require("./app/routes/panier.routes")(app);
require("./app/routes/shop.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Seeder = require("./app/database/Seeder");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
    // Database seeding 

    Seeder.make.interest()
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.engine("html", require('ejs').renderFile)
app.set('view engine', "ejs")

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Lina dates application. An open source dating app" });
});

app.use(express.static("resources"))

app.get('*', (req, res) => {
  res.status(404).render("404")
})

require('./app/routes/index')(app)





// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
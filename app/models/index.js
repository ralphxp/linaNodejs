const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/Users.js")(sequelize, Sequelize);
db.userinfo = require('../models/UserInfo.js')(sequelize, Sequelize);
db.interest = require('../models/Interest.js')(sequelize, Sequelize);

db.userinfo.belongsTo(db.users, {})


module.exports = db;
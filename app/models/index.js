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
db.address = require('../models/Address.js')(sequelize, Sequelize)

db.users.hasOne(db.userinfo, {
  foriegnKey: "user_id",
  as: "info"
});

db.users.hasOne(db.address, {
  foriegnKey: "user_id",
  as: "location"
});

db.users.hasMany(db.interest, {
  foriegnKey: "user_id",
  as: "interest"
});

db.interest.belongsTo(db.users, {
  foriegnKey: "user_id",
  as: "user"
});

db.userinfo.belongsTo(db.users, {
  foriegnKey: "user_id",
  as: "user"
});

db.address.belongsTo(db.users, {
  foriegnKey:"user_id",
  as:"location"
})





module.exports = db;
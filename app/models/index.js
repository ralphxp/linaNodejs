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
db.userinterest = require('./UserInterest.js')(sequelize, Sequelize);
db.address = require('../models/Address.js')(sequelize, Sequelize)
db.interest = require('../models/Interest.js')(sequelize, Sequelize);

// db.users.hasOne(db.userinfo, {
//   // foriegnKey: "userId",
//   as: "info"
// });

// db.users.hasOne(db.address, {
//   foriegnKey: "userId",
//   as: "address"
// });



db.users.belongsToMany(db.interest, {through:db.userinterest})

// db.userinterest.belongsToMany(db.users, {throught:db.interest});

db.userinfo.belongsTo(db.users, {
  foriegnKey: "userId",
  as: "user"
});

db.address.belongsTo(db.users, {
  foriegnKey:"userId",
  as:"user"
})






module.exports = db;
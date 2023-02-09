import express from "express";
import cors from "cors";
import { User } from "./userModel.js";
import { BookTicket, Theater } from "./bmsModel.js";
///import { dbConfig, dbconfigBMS } from "../config/dbConfig.js";

import { Sequelize, DataTypes } from "sequelize";
import { dbconfigBMS } from "../config/dbConfig.js";
import { AnotherTask, AxiosUp, Evenn, Oddd } from "./atModel.js"; //, ForandIf

// dbConfig.DB,
//   dbConfig.USER,
//   dbConfig.PASSWORD,

const env = process.argv[2];
const sequelize = new Sequelize(
  dbconfigBMS[env].DB,
  dbconfigBMS[env].USER,
  dbconfigBMS[env].PASSWORD,
  {
    // host: dbConfig.HOST,    for user
    //dialect: dbConfig.dialect, for user
    host: dbconfigBMS[env].HOST,
    dialect: dbconfigBMS[env].dialect,

    operatorsAliases: false,
    pool: {
      // max: dbConfig.pool.max,   for user
      // min: dbConfig.pool.min,   for user
      // acquire: dbConfig.pool.acquire,   for user
      // idle: dbConfig.pool.idle,  for user
      max: dbconfigBMS[env].pool.max,
      min: dbconfigBMS[env].pool.min,
      acquire: dbconfigBMS[env].pool.acquire,
      idle: dbconfigBMS[env].pool.idle,
    },
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED...");
  })
  .catch((err) => {
    console.log("FAILED" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.users = User(sequelize, DataTypes); for user db
db.bookticket = BookTicket(sequelize, DataTypes);
db.theater = Theater(sequelize, DataTypes);
db.anothertask = AnotherTask(sequelize, DataTypes);
db.evenn = Evenn(sequelize, DataTypes);
db.oddd = Oddd(sequelize, DataTypes);
db.axiosup = AxiosUp(sequelize, DataTypes);
db.sequelize.sync({ force: false }).then(() => {
  console.log("resync");
});

//db.evenn.hasOne(db.oddd, { foreignKey: "id" });
//db.evenn.hasMany(db.oddd, { foreignKey: "id" });
//db.oddd.belongsTo(db.evenn, { foreignKey: "id" });
//db.theater.hasOne(db.bookticket, { foreignKey: "seatChoice" });
db.theater.hasMany(db.bookticket, { foreignKey: "seatChoice" });
db.bookticket.belongsTo(db.theater, { foreignKey: "seatChoice" });
export default db;

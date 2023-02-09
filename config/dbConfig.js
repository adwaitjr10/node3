import dotenv from "dotenv";
dotenv.config();
export const dbconfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "node_api_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export const dbconfigBMS = {
  development: {
    HOST: process.env.DEVELOPMENT_HOST,
    USER: process.env.DEVELOPMENT_USER,
    PASSWORD: process.env.DEVELOPMENT_PASSWORD,
    //    DB: process.env.DEVELOPMENT_DB,
    DB: process.env.DEVELOPMENT_DB2,
    dialect: process.env.DEVELOPMENT_DIALECT,

    pool: {
      max: parseInt(process.env.DEVELOPMENT_MAX) || 5,
      min: parseInt(process.env.DEVELOPMENT_MIN) || 0,
      acquire: parseInt(process.env.DEVELOPMENT_ACQUIRE) || 30000,
      idle: parseInt(process.env.DEVELOPMENT_IDLE) || 10000,
    },
  },
  staging: {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "bms_api_db",
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "bms_api_db",
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};

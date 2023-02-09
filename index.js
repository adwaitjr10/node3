import express from "express";
import dotenv from "dotenv";

const requiredEnvVars = [
  "PORT",
  "DEVELOPMENT_HOST",
  "DEVELOPMENT_USER",
  "DEVELOPMENT_PASSWORD",
  "DEVELOPMENT_DB",
  "DEVELOPMENT_DB2",
  "DEVELOPMENT_DIALECT",
  "BASE_ROUTE",
  "DEVELOPMENT_MAX",
  "DEVELOPMENT_MIN",
  "DEVELOPMENT_ACQUIRE",
  "DEVELOPMENT_IDLE",
];
const unusedEnvVars = requiredEnvVars.filter((i) => !process.env[i]);

if (unusedEnvVars.length)
  throw new Error(
    "Required ENV variables are not set: [" + unusedEnvVars.join(", ") + "]"
  );

import "./server.js";
import "./awsnodesamples/createBucket.js";

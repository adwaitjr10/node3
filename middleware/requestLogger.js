import winston from "winston";
import fs from "fs";
import { createLogger, transports } from "winston";
const LOG_DIR = "logs";
const LOG_LEVEL = "info";

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

/**
 * Create a new winston logger.
 */
const WLogConfig = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      level: "info",
    }),
    new winston.transports.DailyRotateFile({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      maxFiles: "14d",
      level: LOG_LEVEL,
      dirname: "D:/ACC Node/node3/logs",
      datePattern: "YYYY-MM-DD",
      filename: "%DATE%-debug.log",
    }),
    new winston.transports.DailyRotateFile({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      maxFiles: "14d",
      level: "error",
      dirname: "D:/ACC Node/node3/logs",
      datePattern: "YYYY-MM-DD",
      filename: "%DATE%-error.log",
    }),
  ],
};
export const logger = winston.createLogger(WLogConfig);

export const logStream = {
  /**
   * A writable stream for winston logger.
   *
   * @param {any} message
   */
  write(message) {
    console.log("IN HERE requestLoggerJS");
    logger.info(message);
  },

  writeError(message) {
    logger.error(message.toString());
  },
};
// module.exports = {
//   logger,
//   logStream,
// };

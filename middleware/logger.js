import { createLogger, format, transports } from "winston";
export const logger = createLogger({
  level: "debug",
  format: format.json(),
  transports: [
    new transports.File({
      filename: "D:/ACC Node/node3/logs/debug.log",
      level: "debug",
    }),
  ],
});

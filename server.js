import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { sequelizeConnect } from "./config/sequelizeConfig.js";
import { setSecurityHeaders } from "./utils/security.js";
import { AppError } from "./utils/appError.js";
import { HTTP_STATUS } from "./constants/httpStatusCodes.js";
import { ERR_MSG } from "./constants/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import bodyParser from "body-parser";
//incoming post req bodies
import usersRoutes from "./routes/users.js";
import adminRoutes from "./routes/bookTicketSystem.js";
import custRoutes from "./routes/btsCustomer.js";
import dotenv from "dotenv";
import axios, { isCancel, AxiosError } from "axios";
import { logger } from "./middleware/logger.js";

const app = express();

dotenv.config();
const { PORT, NODE_ENV, SEQUELIZE_CONNECTION } = process.env;
const { BASE_ROUTE } = process.env;

const limiter = rateLimit({ windowMs: 900000, max: parseInt(500) });

app.set("trust proxy", 1);
//  Set Rate Limiter
app.use(limiter);

if (NODE_ENV === "localhost") {
  app.use(express.static("public"));
}

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//helemt for haaders
setSecurityHeaders(app);

if (SEQUELIZE_CONNECTION === "Y") {
  sequelizeConnect();
}

//app.use(logHandler);

// app.use(function (request, response, next) {
//   throw new AppError(ERR_MSG.INVALID_ENDPOINT, HTTP_STATUS.NOT_FOUND);
// });

app.use(errorHandler);

app.use(`${BASE_ROUTE}/users`, usersRoutes);
app.use(`${BASE_ROUTE}/admin`, adminRoutes);
app.use(`${BASE_ROUTE}/cust`, custRoutes);

app.get("/", (req, res) => res.send("homepage"));

app.listen(PORT, () =>
  console.log(`server running on port: http://localhost:${PORT}`)
);
export { app };

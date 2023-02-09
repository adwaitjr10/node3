import { ERR_MSG, HTTP_STATUS } from "../constants/index.js";
//import { logStream } from "../middleware/requestLogger.js";
export const errorHandler = (err, req, res, next) => {
  // console.log(err)
  const { headers = {} } = req;
  const { "x-fapi-client-id": clientId, "x-fapi-client-secret": clientSecret } =
    headers;
  logStream.writeError(err);

  if (err.constructor.name === "ResponseBody") {
    const statusCode = parseInt(
      err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
    return res
      .status(statusCode)
      .json({ statusCode, message: err.message, data: err.data });
  }

  if (err.name === "SequelizeDatabaseError") {
    const statusCode = parseInt(
      err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
    return res
      .status(statusCode)
      .json({ statusCode, message: ERR_MSG.SOMETHING_WENT_WRONG });
  }
  const errormessage = err.message || ERR_MSG.SOMETHING_WENT_WRONG;
  if (!res.headersSent) {
    const statusCode = parseInt(HTTP_STATUS.INTERNAL_SERVER_ERROR);
    return res.status(statusCode).json({ statusCode, message: errormessage });
  }
};

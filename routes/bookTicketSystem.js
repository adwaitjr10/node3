import express from "express";
import {
  awsUpload,
  axiosGet,
  belongTo,
  csvtojson,
  forif,
  getCsvFromDb,
  oneToMany,
  oneToOne,
} from "../controllers/anotherTask.js";
import {
  belongsToo,
  deleteCustomer,
  getTotalTickets,
  joinmovie,
  oneToManyy,
  oneToOnee,
  postTotalTickets,
  totalUsers,
  transcript,
} from "../controllers/bmsAdmin.js";
//import { upload } from "../middleware/awsConnection.js";
const router = express.Router();

import { s3, upload } from "../middleware/awsConnection.js";
//router to get available tickets
//router to post to book ticket by user
//router to post:1.Cust reg & seat choice 2.seat-1
//router to put:seat choice update
//router to delete:reservation canceled

router.post("/json", csvtojson);
router.get("/json", getCsvFromDb);

router.post("/eo", forif);
//router.get("/oneToOne", oneToOne);
router.get("/belongTo", belongTo);
router.get("/oneToMany", oneToMany);

////////////////////
router.get("/save", transcript);
router.get("/", getTotalTickets);
router.post("/", postTotalTickets);
router.get("/allUsers", totalUsers);
router.delete("/", deleteCustomer);
router.get("/join", joinmovie);
router.get("/oTo", oneToOnee);
router.get("/bl", belongsToo);
router.get("/oTm", oneToManyy);
router.get("/aog", axiosGet);

router.get("/file", upload.single("file"), awsUpload);

export default router;

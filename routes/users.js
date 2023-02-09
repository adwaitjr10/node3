import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  getUser,
  postUser,
  singleUser,
  deleteUser,
  patchUser,
  updateProduct,
  postUser2,
  getUser2,
} from "../controllers/users.js";
//import getUser from "../controllers/users.js";

const router = express.Router();
let users = [];


//all routes will start wih /users
router.get("/", getUser);

router.post("/", postUser);

router.post("/any/:words", postUser2);
router.get("/any", getUser2);

router.get("/:id", singleUser);

router.put("/:id", updateProduct);

router.delete("/:id", deleteUser);

router.patch("/", patchUser);

export default router;

import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getMovieShows,
} from "../controllers/bmsCustomer.js";
const router = express.Router();

router.get("/shows", getMovieShows);
router.post("/book", createCustomer);
export default router;

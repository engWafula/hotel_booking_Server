import express from "express";
import Hotel from "../models/hotels.js";
import { createErrors } from "../utils/errors.js";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE HOTELS
router.post("/",verifyAdmin, createHotel);

//Delete HOTEL

router.delete("/:id",verifyAdmin, deleteHotel);

//UPDATE HOTELS
router.put("/:id",verifyAdmin, updateHotel);

//Get HOTEL
router.get("/find/:id", getHotel);

//Get ALL HOTELS
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);


export default router;

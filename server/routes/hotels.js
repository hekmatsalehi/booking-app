import express from "express";
import { createNewHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

// Create new hotel
router.post("/", createNewHotel);

// Update hotel
router.put("/:id", updateHotel);

// Delete hotel
router.delete("/:id", deleteHotel);

// Get single hotel
router.get("/:id", getSingleHotel);

// Get all hotels
router.get("/", getAllHotels);

export default router;

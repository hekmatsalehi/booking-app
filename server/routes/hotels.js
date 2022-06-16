import express from "express";
import { createNewHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifies.js";
const router = express.Router();

// Create new hotel
router.post("/", verifyAdmin, createNewHotel);

// Update hotel
router.put("/:id", verifyAdmin, updateHotel);

// Delete hotel
router.delete("/:id", verifyAdmin, deleteHotel);

// Get single hotel
router.get("/:id", getSingleHotel);

// Get all hotels
router.get("/", getAllHotels);

export default router;

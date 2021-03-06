import express from 'express';
import { createNewRoom, deleteRoom, getAllRooms, getSingleRoom, updateRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifies.js';

const router = express.Router()

// Create new room
router.post("/:hotelid", verifyAdmin, createNewRoom);

// Update room
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// Delete room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// Get single room
router.get("/:id", getSingleRoom);

// Get all rooms
router.get("/", getAllRooms);



export default router;
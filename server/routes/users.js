import express from 'express';
import { deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifies.js';

const router = express.Router()

// Update a user
router.put("/:id", verifyUser, updateUser);

// Delete a user
router.delete("/:id", verifyUser, deleteUser);

// Get single user
router.get("/:id", verifyUser, getSingleUser);

// Get all users
router.get("/", verifyAdmin, getAllUsers);

export default router;
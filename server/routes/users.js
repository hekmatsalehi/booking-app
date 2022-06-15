import express from 'express';
import { deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifies.js';

const router = express.Router()

router.get("/checkauth", verifyToken, (req, res, next) => {
   res.send('Hello your are logged in')  
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
   res.send('Logged in, Can Delete your account')  
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
   res.send('Logged in as Admin, Can Delete any account')  
});

// Update a user
router.put("/:id", updateUser);

// Delete a user
router.delete("/:id", deleteUser);

// Get single user
router.get("/:id", getSingleUser);

// Get all users
router.get("/", getAllUsers);

export default router;
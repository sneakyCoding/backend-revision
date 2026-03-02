import express from "express";
import { createUser, deleteUser, getUser, getUserById, patchUser } from "../controllers/controller.js";

const router = express.Router()



router.post('/users',createUser)
router.get('/users',getUser)
router.get('/users/:id',getUserById)
router.patch('/users/:id',patchUser)
router.delete('/users/:id',deleteUser)

export default router;
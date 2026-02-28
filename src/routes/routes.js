import { Router } from "express";
import { createUser, deleteUser, getUser, getUserById, patchUser } from "../controllers/controller";

const router = express.Router();

let users = [];
let idCounter = 1;

router.post('/users',createUser)
router.get('/users',getUser)
router.get('/users/:id',getUserById)
router.patch('/users/:id',patchUser)
router.delete('/users/:id',deleteUser)
import express from "express";
import {getUsers,saveUser} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users',getUsers);
router.post('/users',saveUser);

export default router;
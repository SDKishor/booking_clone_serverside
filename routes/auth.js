import express from "express";
import { Login, register } from "../controllers/authCtrl.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", Login);

export default router;

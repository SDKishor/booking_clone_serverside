import express from "express";
import {
  createRoom,
  DeleteRoom,
  GetAllRooms,
  GetRoom,
  UpdateRoom,
} from "../controllers/roomCtrl.js";
import { verifyIsAdmin } from "../utilities/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyIsAdmin, createRoom);

//UPDATE
router.put("/:id", verifyIsAdmin, UpdateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyIsAdmin, DeleteRoom);

//GET
router.get("/:id", GetRoom);

//Get ALL
router.get("/", GetAllRooms);

export default router;

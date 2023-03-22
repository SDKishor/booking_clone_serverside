import express from "express";
import {
  CreateHotel,
  DeleteHotel,
  GetAllHotels,
  GetHotel,
  UpdateHotel,
} from "../controllers/hotelCtrl.js";

import {
  verifyIsAdmin,
  verifyToken,
  verifyUser,
} from "../utilities/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyIsAdmin, CreateHotel);

//UPDATE
router.put("/:id", verifyIsAdmin, UpdateHotel);

//DELETE
router.delete("/:id", verifyIsAdmin, DeleteHotel);

//GET
router.get("/:id", GetHotel);

//Get ALL
router.get("/", GetAllHotels);

export default router;

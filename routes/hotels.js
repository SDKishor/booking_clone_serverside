import express from "express";
import {
  CountByCity,
  CountByType,
  CreateHotel,
  DeleteHotel,
  GetAllHotels,
  GetHotel,
  UpdateHotel,
} from "../controllers/hotelCtrl.js";

import { verifyIsAdmin } from "../utilities/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyIsAdmin, CreateHotel);

//UPDATE
router.put("/:id", verifyIsAdmin, UpdateHotel);

//DELETE
router.delete("/:id", verifyIsAdmin, DeleteHotel);

//GET
router.get("/find/:id", GetHotel);

//Get ALL
router.get("/", GetAllHotels);

router.get("/countByCity", CountByCity);
router.get("/countByType", CountByType);

export default router;

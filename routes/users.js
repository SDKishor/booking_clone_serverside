import express from "express";
import {
  DeleteUser,
  GetAllUsers,
  GetUser,
  UpdateUser,
} from "../controllers/userCtrl.js";
import {
  verifyIsAdmin,
  verifyToken,
  verifyUser,
} from "../utilities/verifyToken.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("hello User ");
// });

// router.get("/Checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("You can delet your account ");
// });

// router.get("/Checkadmin/:id", verifyUser, (req, res, next) => {
//   res.send("Hello admin");
// });

//UPDATE
router.put("/:id", verifyUser, UpdateUser);

//DELETE
router.delete("/:id", verifyUser, DeleteUser);

//GET
router.get("/:id", verifyUser, GetUser);

//Get ALL
router.get("/", verifyIsAdmin, GetAllUsers);

export default router;

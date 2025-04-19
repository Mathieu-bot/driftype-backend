import express from "express";
import {
  getUserDetail,
  updateUserDetails,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.get("/:userId", authMiddleware , getUserDetail);
router.put("/:userId", authMiddleware , updateUserDetails);

export default router;

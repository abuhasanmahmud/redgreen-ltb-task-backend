import express from "express";

import { authUser, logOut, registerUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/register", registerUser);
router.post("/logout", logOut);

export default router;

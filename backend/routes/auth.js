// authRoutes.js

import express from "express";
import { register, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/sign-up", (req, res, next) => {
  console.log("Reached register route");
  register(req, res, next);
});

router.post("/sign-in", (req, res, next) => {
  console.log("Reached login route");
  login(req, res, next);
});

export default router;


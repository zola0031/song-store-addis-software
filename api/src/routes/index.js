import express from "express";
const router = express.Router();
import songRoutes from "./songRoutes.js";

router.use("/api/songs", songRoutes);

export default router;

import express from "express";
const router = express.Router();

import {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
  songStatics,
} from "../controllers/songController.js";

router.route("/").get(getSongs).post(createSong);
router.route("/:id").put(updateSong).delete(deleteSong);

router.route("/statics").get(songStatics);

export default router;

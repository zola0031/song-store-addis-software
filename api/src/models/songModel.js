import mongoose from "mongoose";

const songSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },

    artist: {
      type: String,
    },

    album: {
      type: String,
    },

    genre: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Song", songSchema);

export default Song;

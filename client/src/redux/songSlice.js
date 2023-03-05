import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: {
    song: {
      total: 0,
      data: [],
    },
    statics: {
      countAll: [],
      countByAlbum: [],
      countByArtist: [],
      countByGenre: [],
    },
  },
  reducers: {
    getSongs(state, action) {},
    setSongs(state, action) {
      const song = action.payload;
      state.song = song;
      return state;
    },
    getSongStatics(state, action) {},
    setSongStatics(state, action) {
      const statics = action.payload;
      state.statics = statics;
      return state;
    },
    createSong(state, action) {
      return state;
    },
    updateSong(state, action) {
      return state;
    },
    deleteSong(state, action) {
      return state;
    },
  },
});

export const {
  getSongs,
  setSongs,
  getSongStatics,
  setSongStatics,
  createSong,
  updateSong,
  deleteSong,
} = songSlice.actions;

export default songSlice.reducer;

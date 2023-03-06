import { put } from "redux-saga/effects";
import { setSongs, setSongStatics } from "../songSlice";
import {
  getSongsAPI,
  getSongStaticsAPI,
  createSongsAPI,
  updateSongsAPI,
  deleteSongsAPI,
} from "../apis/songsApi";

export function* handleGetSongs(action) {
  try {
    const { payload } = action;
    const songs = yield getSongsAPI(payload);
    yield put(setSongs(songs.data));
  } catch (error) {
    console.log(
      "🚀 ~ file: songHandlers.js:17 ~ function*handleGetSongs ~ error:",
      error
    );
  }
}

export function* handleGetSongStatics(action) {
  try {
    const songs = yield getSongStaticsAPI();
    yield put(setSongStatics(songs.data));
  } catch (error) {
    console.log(
      "🚀 ~ file: songHandlers.js:28 ~ function*handleGetSongStatics ~ error:",
      error
    );
  }
}

export function* handleCreateSong(action) {
  const { payload } = action;
  try {
    yield createSongsAPI(payload);
  } catch (error) {
    console.log(
      "🚀 ~ file: songHandlers.js:41 ~ function*handleCreateSong ~ error:",
      error
    );
  }
}

export function* handleUpdateSong(action) {
  const { payload } = action;
  try {
    yield updateSongsAPI(payload);
  } catch (error) {
    console.log(
      "🚀 ~ file: songHandlers.js:53 ~ function*handleUpdateSong ~ error:",
      error
    );
  }
}

export function* handleDeleteSong(action) {
  const { payload } = action;
  try {
    yield deleteSongsAPI(payload);
  } catch (error) {
    console.log(
      "🚀 ~ file: songHandlers.js:65 ~ function*handleDeleteSong ~ error:",
      error
    );
  }
}

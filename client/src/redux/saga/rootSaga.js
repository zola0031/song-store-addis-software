import {takeLatest} from "redux-saga/effects";
import { handleGetSong } from "./songHandlers";
import { getSongs } from "../songSlice";

export function* watcherSaga(){
    console.log("root");
    yield takeLatest(getSongs.type, handleGetSong)
}
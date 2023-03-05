import { call, put } from "redux-saga/effects";
import { getSongs } from "../songSlice";
import { requestGetSong } from "./songRequests";

export function* handleGetSong(action) {
    const payload = null;
    // const payload = action.payload;
    console.log("handler");
    try {
        const response = yield call(requestGetSong)
        const { data } = response;
        console.log({data});
        yield put(getSongs({...data}))

    } catch (error) {
        console.log({error})
    }
}
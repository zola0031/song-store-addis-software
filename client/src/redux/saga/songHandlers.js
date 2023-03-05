import { call, put } from "redux-saga/effects";
import { setSongs } from "../songSlice";
import { requestGetSong } from "./songRequests";

export function* handleGetSong(action) {
    const { payload } = action.payload;
    console.log("handler", payload);
    try {
        const response = yield call(requestGetSong, payload);
        const { data } = response;
        yield put(setSongs({...data}))
    } catch (error) {
        console.log({error})
    }
}
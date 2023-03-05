import {createSlice} from '@reduxjs/toolkit';

const songSlice = createSlice({
    name: "song",
    initialState: {
        song: {
            total: 0,
            data: []
        }
    },
    reducers:{
        getSongs: {},
        setSongs(state, action) {
            const song = action.payload;
            console.log({song});
            state.song = song;
            return state;
        },
        getSongStatics: {},
        createSong(state, action){
            const song = action.payload;
            state.song.total += 1;
            state.song.data.push(song);
        }
    }
});

export const {getSongs, setSongs, getSongStatics, createSong} = songSlice.actions;

export default songSlice.reducers;
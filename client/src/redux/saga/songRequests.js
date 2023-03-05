import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export function requestGetSong(payload) {
    const {page = 1, limit = 10} = payload ;
    return axios.request({
        method: "GET",
        url: `${baseUrl}/songs/?page=${page}&limit=${limit}`
    })
}
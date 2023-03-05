import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export function* requestGetSong() {
    // const {page = 1, limit = 10} ;
    const page = 1;
    const limit = 10;
    console.log("request");
    return axios.request({
        method: "GET",
        url: `${baseUrl}/songs/?page=${page}&limit=${limit}`
    })
}
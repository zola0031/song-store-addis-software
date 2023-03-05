import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export const getSongsAPI = async (payload) => {
  const { page = 1, limit = 10 } = payload;
  return axios.get(`/songs/?page=${page}&limit=${limit}`);
};

export const getSongStaticsAPI = async () => {
  return axios.get(`/songs/statics`);
};

export const createSongsAPI = async (payload) => {
  return axios.post(`/songs`, payload);
};

export const updateSongsAPI = async (payload) => {
  return axios.put(`/songs/${payload.id}`, payload);
};

export const deleteSongsAPI = async (payload) => {
  return axios.delete(`/songs/${payload.id}`);
};

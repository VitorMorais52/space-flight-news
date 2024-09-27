import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v4",
});

export default api;

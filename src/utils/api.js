import axios from "axios";

const API_PATH = "https://news-api.deta.dev/";
const AUTH_TOKEN = "sdkjfhdsfhjeriuregmndsro3yredfjksnk";

export const api = axios.create({
  baseURL: API_PATH,
});

// api.defaults.headers.common["Authorization"] = AUTH_TOKEN;
api.defaults.headers.post["Content-Type"] = "application/json";

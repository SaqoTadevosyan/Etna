import axios from "axios";
import { Config } from "../config";

export const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 3000,
});



export default api;

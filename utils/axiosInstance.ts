import { API_URL } from "@/constants/api";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
export default axiosInstance;

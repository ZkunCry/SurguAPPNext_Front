import { API_URL } from "@/constants/api";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  const isSSR = typeof window === "undefined";
  console.log(isSSR);
  if (isSSR) {
    const { cookies } = await import("next/headers");
    const accessToken = (await cookies()).get("accessToken")?.value;
    const refreshToken = (await cookies()).get("refreshToken")?.value;
    if (accessToken) {
      config.headers.set(
        "cookie",
        `accessToken=${accessToken};refreshToken=${refreshToken}`
      );
    }
  }
  return config;
});

export default axiosInstance;

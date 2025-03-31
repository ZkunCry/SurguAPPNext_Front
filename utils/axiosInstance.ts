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
        `Authorization: 623|fE83dOZCesmoLe77rGBDOrM2ft8QA1Y2Mhsdfr8adeb5ddc6`,
        `accessToken=${accessToken};refreshToken=${refreshToken}`
      );
    }
  }
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => response, // Возвращаем ответ, если все хорошо
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.get(`${API_URL}/access_token`, {
          withCredentials: true,
        });
        console.log(refreshResponse.headers);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Ошибка обновления токена", refreshError);
        return Promise.reject(refreshError);
      }
    }

    // Если ошибка не 401 или другая проблема
    return Promise.reject(error);
  }
);
export default axiosInstance;

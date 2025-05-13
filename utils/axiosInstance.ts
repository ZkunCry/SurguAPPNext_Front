import { API_URL } from "@/constants/api";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export async function deleteCookies() {
  const { cookies } = await import("next/headers");
  (await cookies()).set("accessToken", "");
}

axiosInstance.interceptors.request.use(async (config) => {
  const isSSR = typeof window === "undefined";
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
let subscribers = [];

function addSubscriber(callback) {
  subscribers.push(callback);
}

function onRefreshed(newToken) {
  subscribers.forEach((callback) => callback(newToken));
  subscribers = [];
}
let isRefreshing = false;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve) => {
        const retryOriginalRequest = () => {
          resolve(axiosInstance(originalRequest));
        };
        addSubscriber(retryOriginalRequest);
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const { data } = await axios.get(`${API_URL}/access_token`, {
        withCredentials: true,
      });

      // Повторяем оригинальный запрос
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      // Ловим именно ошибку просроченного refreshToken
      if (
        (refreshError.response?.status === 401 &&
          refreshError.response.data ===
            "Refresh token is expired or not present") ||
        refreshError.response.data === "No token has been provided"
      ) {
        const error = new Error("Требуется повторная авторизация");
        error.status = 401;
        error.data = { message: "Требуется повторная авторизация" };
        const { data } = await axios.get(`api/logout`, {
          withCredentials: true,
        });
        return Promise.reject(error);
      }

      // Другие ошибки при обновлении
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);
export default axiosInstance;

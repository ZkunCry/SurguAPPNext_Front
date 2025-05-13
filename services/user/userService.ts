import type { IUser } from "@/types/user";
import axiosInstance from "@/utils/axiosInstance";

export const UserService = {
  async getUserById(id: number | null) {
    const { data } = await axiosInstance.get<IUser>(`/user?id=${id}`);
    return data;
  },
  async getUserMe() {
    const { data } = await axiosInstance.get<IUser>("/user/me");
    return data;
  },
};

import type { IUser } from "@/types/user";
import axiosInstance from "@/utils/axiosInstance";
import { SignInType, SignUpType } from "@/schemas/authschema";

export const AuthService = {
  async signIn(user: SignInType) {
    const { data } = await axiosInstance.post<IUser>("/auth/signin", user);
    return data;
  },
  async signUp(user: SignUpType) {
    const { data } = await axiosInstance.post<IUser>("/auth/signup", user);
    return data;
  },
};

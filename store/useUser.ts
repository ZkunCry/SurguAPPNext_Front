import { UserService } from "@/services/user/userService";
import type { IUser } from "@/types/user";
import { create } from "zustand";
interface IUserState {
  user: IUser | null;
  setCredentials: (user: IUser) => void;
  getUserByStorage: () => number | null;
  logOut: () => void;
}

const useUserStore = create<IUserState>((set) => ({
  user: null,
  setCredentials(userData) {
    set({ user: userData });
    localStorage.setItem("id", JSON.stringify(userData.id));
  },
  getUserByStorage() {
    const storedId = localStorage.getItem("id");
    if (storedId) {
      const userById = UserService.getUserById(JSON.parse(storedId));
      console.log(userById);
      return JSON.parse(storedId) as number;
    }
    return null;
  },
  logOut() {
    set({ user: null });
  },
}));
export default useUserStore;

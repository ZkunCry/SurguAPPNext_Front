import { UserService } from "@/services/user/userService";
import type { IUser } from "@/types/user";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export function useGetUserById(
  id: number | null,
  options?: UseQueryOptions<IUser, Error>
) {
  return useQuery<IUser, Error>({
    queryKey: [`user/${id}`, id],
    queryFn: async () => UserService.getUserById(id),
    retry: () => {
      return false;
    },
    ...options,
  });
}

export function useGetUserMe(options?: UseQueryOptions<IUser, Error>) {
  return useQuery<IUser, Error>({
    queryKey: [`user/me`],
    queryFn: async () => UserService.getUserMe(),
    retry: () => {
      return false;
    },
    ...options,
  });
}

import { UserService } from "@/services/user/userService";
import type { IUser } from "@/types/user";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export function useGetUserById(
  id: number | null,
  options?: UseQueryOptions<IUser, Error>
) {
  return useQuery<IUser, Error>({
    queryKey: [`user/${id}`],
    queryFn: async () => UserService.getUserById(id),
    ...options,
  });
}

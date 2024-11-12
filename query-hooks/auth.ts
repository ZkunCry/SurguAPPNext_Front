import type { IUser } from "@/types/user";
import { AuthService } from "@/services/auth/authService";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import type { SignInType } from "@/schemas/authschema";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

// Тип для результата мутации
type IUseSignIn = UseMutationResult<IUser, AxiosError, SignInType, unknown>;

export function useSignIn(): IUseSignIn {
  return useMutation<IUser, AxiosError, SignInType>({
    mutationFn: AuthService.signIn,
    onError: (error: AxiosError) => {
      toast.error(`Ошибка: ${error.response?.data}`);
    },
    onSuccess: (data) => {
      toast.success("Вы успешно вошли в систему.");
    },
  });
}

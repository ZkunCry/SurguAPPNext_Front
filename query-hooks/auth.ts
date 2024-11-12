import type { IUser } from "@/types/user";
import { AuthService } from "@/services/auth/authService";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import type { SignInType, SignUpType } from "@/schemas/authschema";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

// Тип для результата мутации
type IUseSignIn = UseMutationResult<IUser, AxiosError, SignInType, unknown>;
type IUseSignUp = UseMutationResult<IUser, AxiosError, SignUpType, unknown>;

export function useSignIn(): IUseSignIn {
  return useMutation<IUser, AxiosError, SignInType>({
    mutationFn: AuthService.signIn,
    onError: (error) => {
      toast.error(`Ошибка: ${error.response?.data}`);
    },
    onSuccess: (data) => {
      toast.success("Вы успешно вошли в систему.");
    },
  });
}

export function useSignUp(): IUseSignUp {
  return useMutation<IUser, AxiosError, SignUpType>({
    mutationFn: AuthService.signUp,
    onError: (error) => {
      toast.error(`Ошибка: ${error.response?.data}`);
    },
    onSuccess: (data) => {
      toast.success("Вы успешно прошли авторизацию.");
    },
  });
}

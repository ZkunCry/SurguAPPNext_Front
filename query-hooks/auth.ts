import type { IUser } from "@/types/user";
import { AuthService } from "@/services/auth/authService";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import type { SignInType } from "@/schemas/authschema";

// Тип для результата мутации
type IUseSignIn = UseMutationResult<IUser, Error, SignInType, unknown>;

export function useSignIn(): IUseSignIn {
  return useMutation<IUser, Error, SignInType>(AuthService.signIn, {
    onError: (error) => {
      // Обработка ошибки
      console.error("Error during sign in", error);
    },
    onSuccess: (data) => {
      // Обработка успешного логина, например, сохранение данных о пользователе
      console.log("Signed in successfully", data);
    },
  });
}
